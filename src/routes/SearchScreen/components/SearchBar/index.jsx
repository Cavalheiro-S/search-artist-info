import { handleServiceResponseSpotify } from "commons/utils/handleServiceResponseSpotify";
import { Button, Input } from "components";
import { ResultContext } from "contexts";
import { ArtistContext } from "contexts/ArtistContext";
import { useContext, useRef, useState } from "react";
import { getArtistAlbums, getSearchArtist, getTopTracksFromArtist } from "services/spotify/get";
import { EmptyMessage, InputContainer, SearchBarStyled, SearchTitle } from "./styled";

const SearchBar = () => {
    const inputRef = useRef();
    const [inputEmpty, setInputEmpty] = useState(null);
    const { setArtistTracks, setArtistInfo, setArtistAlbums } = useContext(ArtistContext);
    const { setLoading, setQueryFinded } = useContext(ResultContext);

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
            setLoading(true);

            try {
                const searchArtistResponse = await getSearchArtist(inputValue);
                const tracksArtistResponse = await getTopTracksFromArtist(searchArtistResponse.data.id)
                const albumsArtistResponse = await getArtistAlbums(searchArtistResponse.data.id);
                handleSearch(searchArtistResponse, tracksArtistResponse, albumsArtistResponse);
            }
            catch (Error) {
                setQueryFinded({ query: inputValue, finded: false });
                console.log(Error);
            }
            finally {
                setLoading(false);
            }
        }
    }

    const callbackIfResponseSuccess = (newState, setState) => {
        return () => {
            setState(newState);
            setQueryFinded({ query: newState, finded: true });
        }
    }

    const callbackIfResponseError = (searchResponse) => {
        return setQueryFinded({ query: searchResponse.data, finded: false })
    }

    const handleSearch = (searchResponse, tracksResponse, albumsResponse) => {
        handleServiceResponseSpotify(searchResponse, callbackIfResponseSuccess(searchResponse.data, setArtistInfo), callbackIfResponseError(searchResponse));
        handleServiceResponseSpotify(tracksResponse, callbackIfResponseSuccess(tracksResponse.data, setArtistTracks), callbackIfResponseError(searchResponse));
        handleServiceResponseSpotify(albumsResponse, callbackIfResponseSuccess(albumsResponse.data, setArtistAlbums), callbackIfResponseError(searchResponse));
    }


    return (
        <>
            <SearchTitle>Search a artist:</SearchTitle>
            <SearchBarStyled>
                <InputContainer>
                    {inputEmpty && <EmptyMessage>This field could'nt are empty</EmptyMessage>}
                    <Input onKeyDown={handleKeyDown} propRef={inputRef} placeholder="Type a artist name" />
                </InputContainer>
                <Button onClick={handleClick} backgroundColor="primary" textColor="light">
                    Search
                </Button>
            </SearchBarStyled>
        </>
    )
}

export default SearchBar