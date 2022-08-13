const { UPDATE_ARTIST_INFO, UPDATE_ARTIST_ALBUMS, UPDATE_ARTIST_TRACKS } = require("./actionTypes");

export const updateArtistInfo = value => ({
    type: UPDATE_ARTIST_INFO,
    artistInfo: value
})

export const updateArtistTracks = value => ({
    type: UPDATE_ARTIST_TRACKS,
    artistTracks: value
})

export const updateArtistAlbums = value => ({
    type: UPDATE_ARTIST_ALBUMS,
    artistAlbums: value
})
