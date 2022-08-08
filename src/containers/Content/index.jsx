import { Loading } from "components";
import { ArtistContext, ResultContext } from "contexts";
import { useContext, useState } from "react";
import styled from "styled-components";
import { ArtistInfo, CardContainer, ContentNotFounded, SearchBar, TabButtons } from "./components";

const ContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 48px 4rem;
    height: 100%;
`

const Content = (props) => {

    const [tabActive, setTabActive] = useState("tracks");
    const { artistTracks, artistAlbums, } = useContext(ArtistContext);
    const { loading, queryFinded} = useContext(ResultContext);

    const returnContentContainer = () => {

        if (tabActive === "tracks")
            return artistTracks.tracks

        if (tabActive === "albums")
            return artistAlbums.items
    }

    const handleRenderResult = () => {
        if (loading) {
            return <Loading />
        }
        if (!queryFinded.query && !queryFinded.finded) {
            return null
        }
        if (queryFinded.query && !queryFinded.finded) {
            return <ContentNotFounded />
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
            <SearchBar />
            {handleRenderResult()}
        </ContentStyled>
    )
}

export default Content;