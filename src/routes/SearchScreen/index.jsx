import { Loading } from "components";
import { useState } from "react";
import { connect } from "react-redux";
import { ArtistInfo, CardContainer, SearchBar, TabButtons } from "./components";
import IllustrationNotFinded from "./components/IllustrationNotFinded";
import IllustrationPlaySong from "./components/IllustrationPlaySong";
import { SearchScreenStyled } from "./components/styled";


const SearchScreen = ({ loading, queryFinded, artistAlbums, artistTracks }) => {

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
            return <IllustrationPlaySong />

        }
        if (queryFinded.query && !queryFinded.finded) {
            return <IllustrationNotFinded queryNotFinded={queryFinded.query} />
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
    loading: store.resultState.loading,
    theme: store.themeState.theme
})

export default connect(mapStateToProps)(SearchScreen);