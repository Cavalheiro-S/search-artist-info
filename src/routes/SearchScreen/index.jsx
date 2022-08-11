import { Loading } from "components";
import { ArtistContext, ResultContext } from "contexts";
import { useContext, useState } from "react";
import styled from "styled-components";
import { ArtistInfo, CardContainer, SearchBar, TabButtons } from "./components";
import IlustrationNotFinded from "./components/IlustrationNotFinded";
import IlustrationPlaySong from "./components/IlustrationPlaySong";

const SearchScreenStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 5rem 0;
    height: 100%;
`

const SearchScreen = (props) => {

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
            return <IlustrationPlaySong/>

        }
        if (queryFinded.query && !queryFinded.finded) {
            return <IlustrationNotFinded queryNotFinded={queryFinded.query}/>
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
        <SearchScreenStyled>
            <SearchBar />
            {handleRenderResult()}
        </SearchScreenStyled>
    )
}

export default SearchScreen;