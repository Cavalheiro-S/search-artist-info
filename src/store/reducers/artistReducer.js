import { UPDATE_ARTIST_ALBUMS, UPDATE_ARTIST_INFO, UPDATE_ARTIST_TRACKS } from "store/actions/actionTypes";

const initalState = {
    artistInfo: null,
    artistTracks: null,
    artistAlbums: null
}

const ArtistReducer = (state = initalState, action) => {

    switch (action.type) {

        case UPDATE_ARTIST_INFO:
            return {
                ...state,
                artistInfo: action.artistInfo
            }
        case UPDATE_ARTIST_TRACKS:
            return {
                ...state,
                artistTracks: action.artistTracks
            }
        case UPDATE_ARTIST_ALBUMS:
            return {
                ...state,
                artistAlbums: action.artistAlbums
            }
        default:
            return state
    }
}

export default ArtistReducer;