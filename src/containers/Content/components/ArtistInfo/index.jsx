import styled from "styled-components";
import star from "assets/imgs/ant-design_star-filled.png";
import spotifyIcon from "assets/imgs/cib_spotify.png";
import spotifyDefaultImage from "assets/imgs/spotify_img.png"
import { styles } from "assets/style/global";
import { useContext } from "react";
import { ArtistContext } from "contexts/ArtistContext";

const ImgArtist = styled.img`
    width: 180px;
    height: 180px;
`
const ArtistInfoStyled = styled.div`
    display: flex;
    gap: 24px;
`
const ArtistDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    height: 180px;
`
const ArtistName = styled.h2`
    color: white;
    margin: 0;
`
const ArtistNumbers = styled.div`
    display: flex;
    gap: 24px;
`
const ArtistLinkSpotify = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-decoration: none;
    color: black;
    padding: 12px;
    border-radius: 48px;
    width: 160px;
    font-weight: bold;
    background-color: ${styles.color.primary};
    transition: ease .1s all;
    &:hover{
        transform: scale(105%);
    }
`

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