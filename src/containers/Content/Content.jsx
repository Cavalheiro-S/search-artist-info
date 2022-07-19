import { useContext, useState } from "react";
import styled from "styled-components";
import { getArtistAlbums, getSearchArtist, getTopTracksFromArtist } from "services/spotify/get";
import { ArtistInfo, CardContainer, SearchBar, TabButtons, ContentNotFounded } from "./components";
import { ArtistContext } from "contexts/ArtistContext";
import { Loading } from "components";
import { handleServiceResponseSpotify } from "commons/utils/handleServiceResponseSpotify";

const ContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 48px 4rem;
    height: 100%;
`

const Content = (props) => {

    const [queryFinded, setQueryFinded] = useState({ query: null, finded: false });
    const [loading, setLoading] = useState(false);
    const [tabActive, setTabActive] = useState("tracks");
    const {
        artistTracks,
        setArtistTracks,
        setArtistInfo,
        artistAlbums,
        setArtistAlbums
    } = useContext(ArtistContext);

    const returnContentContainer = () => {

        if (tabActive === "tracks")
            return artistTracks.tracks

        if (tabActive === "albums")
            return artistAlbums.items
    }


    const searchQuery = async (artistName) => {
        setLoading(true);
        try {
            const searchArtistResponse = await getSearchArtist(artistName);
            const tracksArtistResponse = await getTopTracksFromArtist(searchArtistResponse.data.id)
            const albumsArtistResponse = await getArtistAlbums(searchArtistResponse.data.id);
            handleSearch(searchArtistResponse, tracksArtistResponse, albumsArtistResponse);
        }
        catch (Error) {
            setQueryFinded({ query: artistName, finded: false });
            console.log(Error);
        }
        finally {
            setLoading(false);
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

    const handleRenderResult = () => {
        if (loading) {
            return <Loading />
        }
        if (!queryFinded.query && !queryFinded.finded) {
            return null
        }
        if (queryFinded.query !== null && !queryFinded.finded) {
            return <ContentNotFounded queryNotFounded={queryFinded.query} />
        }
        return (
            <>
                <ArtistInfo />
                <TabButtons tabActive={tabActive} setTabActive={setTabActive.bind(this)} />
                <CardContainer cards={returnContentContainer()} type={tabActive} />
            </>
        )
    }

    return (
        <ContentStyled>
            <SearchBar onClick={searchQuery} />
            {handleRenderResult()}
        </ContentStyled>
    )
}

export default Content;