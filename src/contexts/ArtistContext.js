const {createContext, useState } = require("react");

const ArtistContext = createContext();

const ArtistProvider = ({children}) => {

    const [artistInfo, setArtistInfo] = useState();
    const [artistTracks, setArtistTracks] = useState();
    const [artistAlbums, setArtistAlbums] = useState();
    const value = {
        artistInfo,
        setArtistInfo,
        artistTracks,
        setArtistTracks,
        artistAlbums,
        setArtistAlbums
    }

    return(
        <ArtistContext.Provider value={value}>
            {children}
        </ArtistContext.Provider>
    )
}

export {ArtistProvider, ArtistContext}