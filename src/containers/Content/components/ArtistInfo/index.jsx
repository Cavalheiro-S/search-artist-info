import star from "assets/imgs/ant-design_star-filled.png";
import spotifyIcon from "assets/imgs/cib_spotify.png";
import spotifyDefaultImage from "assets/imgs/spotify_img.png"
import { useContext } from "react";
import { ArtistContext } from "contexts/ArtistContext";
import { ArtistInfoStyled, ImgArtist, ArtistDescription, ArtistName, ArtistLinkSpotify, ArtistNumbers } from "./styled";


const ArtistInfo = () => {
    const { artistInfo } = useContext(ArtistContext);

    const showPopularityStar = (popularityTotal) => {
        if (popularityTotal === 0) {
            return 0
        }
        const renderStars = [];
        const totalStars = Math.ceil(popularityTotal / 20);
        for (let i = 0; i < totalStars; i++) {
            renderStars.push(<img height="24px" key={star + i} src={star} alt="star" />)
        }
        return (
            renderStars.map(star => star)
        )
    }

    return (

        <ArtistInfoStyled>
            <ImgArtist src={artistInfo?.images[0]?.url ? artistInfo?.images[0].url : spotifyDefaultImage} alt="Image of search artist" />
            <ArtistDescription>
                <ArtistName>{artistInfo?.name}</ArtistName>
                <span>Genre: {artistInfo.genres[0] ? artistInfo.genres[0] : "Not Found"}</span>

                {artistInfo.external_urls.spotify ?
                    <ArtistLinkSpotify target="_blank" href={artistInfo.external_urls.spotify}>
                        <img height="24px" src={spotifyIcon} alt="Spotify Icon" />
                        Spotify
                    </ArtistLinkSpotify> : null}
                <ArtistNumbers>
                    <div>
                        <span>Followers</span><br />
                        {artistInfo.followers.total.toLocaleString()}
                    </div>
                    <div>
                        <span>Popularity</span><br />
                        {showPopularityStar(artistInfo.popularity)}
                    </div>
                </ArtistNumbers>
            </ArtistDescription>
        </ArtistInfoStyled>
    )
}

export default ArtistInfo;