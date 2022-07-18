import { useContext, useState } from "react";
import styled from "styled-components";
import { getArtistAlbums, getSearchArtist, getTopTracksFromArtist } from "services/spotify/get";
import { ArtistInfo, CardContainer, SearchBar, TabButtons, ContentNotFounded } from "./components";
import { ArtistContext } from "contexts/ArtistContext";
import { Loading } from "components";

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

    const handleRenderCardContainer = () => {

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
            console.log(albumsArtistResponse);
            handleSearch(searchArtistResponse, tracksArtistResponse, albumsArtistResponse);
        }
        catch {
            setQueryFinded({ query: artistName, finded: false });
        }
        finally {
            setLoading(false);
        }
    }

    const handleSearch = (searchResult, tracksResult, albumsResult) => {
        if (searchResult.status === 200 && tracksResult.status === 200) {
            setArtistInfo(searchResult.data);
            setArtistTracks(tracksResult.data);
            setArtistAlbums(albumsResult.data);
            setQueryFinded({ query: searchResult.data, finded: true });
        }
        else {
            setQueryFinded({ query: searchResult.data, finded: false });
            console.log(queryFinded);
        }
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
                <CardContainer cards={handleRenderCardContainer()} type={tabActive} />
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