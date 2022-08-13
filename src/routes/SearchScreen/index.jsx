import { Loading } from "components";
import { useState } from "react";
import { connect } from "react-redux";
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

const SearchScreen = ({ loading, queryFinded,artistAlbums, artistTracks }) => {

    const [tabActive, setTabActive] = useState("tracks");
    
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
            return <IlustrationPlaySong />

        }
        if (queryFinded.query && !queryFinded.finded) {
            return <IlustrationNotFinded queryNotFinded={queryFinded.query} />
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

const mapStateToProps = store => ({
    artistAlbums: store.artistState.artistAlbums,
    artistTracks: store.artistState.artistTracks,
    queryFinded: {
        query: store.resultState.queryFinded.query,
        finded: store.resultState.queryFinded.finded
    },
    loading: store.resultState.loading
})

export default connect(mapStateToProps)(SearchScreen);