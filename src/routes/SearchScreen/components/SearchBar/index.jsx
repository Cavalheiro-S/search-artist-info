import { handleServiceResponseSpotify } from "commons/utils/handleServiceResponseSpotify";
import { getActualLanguage } from "data/language";
import { useRef, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { getArtistAlbums, getSearchArtist, getTopTracksFromArtist } from "services/spotify/get";
import { updateLoading, updateResult } from "store/actions";
import { updateArtistAlbums, updateArtistInfo, updateArtistTracks } from "store/actions/artistAction";
import { ButtonStyled, EmptyMessage, InputContainer, InputStyled, SearchBarContainer, SearchBarStyled, SearchTitle } from "./styled";

const SearchBar = () => {
    const inputRef = useRef();
    const [inputEmpty, setInputEmpty] = useState(null);
    const dispatch = useDispatch();
    let actualLanguage = getActualLanguage();

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleClick();
        }
    }

    const handleClick = async () => {
        const inputValue = inputRef.current.value
        if (!inputValue) {
            setInputEmpty(true);
        }
        else {
            setInputEmpty(false);
            dispatch(updateLoading(true));

            try {
                const searchArtistResponse = await getSearchArtist(inputValue);
                const tracksArtistResponse = await getTopTracksFromArtist(searchArtistResponse.data.id)
                const albumsArtistResponse = await getArtistAlbums(searchArtistResponse.data.id);
                handleSearch(searchArtistResponse, tracksArtistResponse, albumsArtistResponse);
            }
            catch (Error) {
                dispatch(updateResult({ query: inputValue, finded: false }))
                console.log(Error);
            }
            finally {
                dispatch(updateLoading(false));
            }
        }
    }

    const callbackIfResponseSuccess = (newState, setState) => {
        return () => {
            dispatch(setState(newState));
            dispatch(updateResult({ query: newState, finded: true }));
        }
    }

    const callbackIfResponseError = (searchResponse) => {
        dispatch(updateResult({ query: searchResponse.data, finded: false }));
    }

    const handleSearch = (searchResponse, tracksResponse, albumsResponse) => {
        handleServiceResponseSpotify(searchResponse, callbackIfResponseSuccess(searchResponse.data, updateArtistInfo), callbackIfResponseError(searchResponse));
        handleServiceResponseSpotify(tracksResponse, callbackIfResponseSuccess(tracksResponse.data, updateArtistTracks), callbackIfResponseError(searchResponse));
        handleServiceResponseSpotify(albumsResponse, callbackIfResponseSuccess(albumsResponse.data, updateArtistAlbums), callbackIfResponseError(searchResponse));
    }


    return (
        <SearchBarContainer>
            <SearchTitle>{actualLanguage.searchScreen.searchBar.label}</SearchTitle>
            <SearchBarStyled>
                <InputContainer>
                    {inputEmpty && <EmptyMessage>{actualLanguage.searchScreen.searchBar.inputEmptyMessage}</EmptyMessage>}
                    <InputStyled onKeyDown={handleKeyDown} propRef={inputRef} placeholder={actualLanguage.searchScreen.searchBar.inputPlaceholder}/>
                </InputContainer>
                <ButtonStyled btnType="buttonActived" onClick={handleClick} backgroundColor="primary" textColor="dark">
                    {actualLanguage.searchScreen.searchBar.buttonToSearch}
                </ButtonStyled>
            </SearchBarStyled>
        </SearchBarContainer>
    )
}

const mapStateToProps = store => ({
    queryFinded: {
        query: store.resultState.query,
        finded: store.resultState.finded
    },
    loading: store.resultState.loading
})

export default connect(mapStateToProps)(SearchBar);