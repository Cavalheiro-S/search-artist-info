import star from "assets/imgs/ant-design_star-filled.png";
import spotifyIcon from "assets/imgs/cib_spotify.png";
import spotifyDefaultImage from "assets/imgs/spotify_img.png"
import { ArtistInfoStyled, ImgArtist, ArtistDescription, ArtistName, ArtistLinkSpotify, ArtistNumbers, ArtistInfoSpan } from "./styled";
import { connect } from "react-redux";
import { getActualLanguage } from "data/language";
import PropTypes from "prop-types";


const ArtistInfo = ({ artistInfo }) => {

    let actualLanguage = getActualLanguage();

    const showPopularityStar = (popularityTotal) => {
        if (popularityTotal === 0) {
            return 0
        }
        const renderStars = [];
        const totalStars = Math.ceil(popularityTotal / 20);
        for (let i = 0; i < totalStars; i++) {
            renderStars.push(<img height="24px" key={star + i} src={star} alt={actualLanguage.searchScreen.artistInfo.alt.star} />)
        }
        return (
            renderStars.map(star => star)
        )
    }

    return (

        <ArtistInfoStyled>
            <ImgArtist src={artistInfo.images[0].url} alt={actualLanguage.searchScreen.artistInfo.alt.artistImage} />
            <ArtistDescription>
                <ArtistName>{artistInfo.name}</ArtistName>
                {artistInfo.external_urls.spotify &&
                    <ArtistLinkSpotify target="_blank" href={artistInfo.external_urls.spotify}>
                        <img height="24px" src={spotifyIcon} alt={actualLanguage.searchScreen.artistInfo.alt.spotify} />
                        Spotify
                    </ArtistLinkSpotify>}
                <ArtistNumbers>
                    <div>
                        <ArtistInfoSpan>{actualLanguage.searchScreen.artistInfo.followers}</ArtistInfoSpan><br />
                        {artistInfo.followers.total.toLocaleString()}
                    </div>
                    <div>
                        <ArtistInfoSpan>{actualLanguage.searchScreen.artistInfo.popularity}</ArtistInfoSpan><br />
                        {showPopularityStar(artistInfo.popularity)}
                    </div>
                </ArtistNumbers>
            </ArtistDescription>
        </ArtistInfoStyled>
    )
}

ArtistInfo.propTypes = {
    artistInfo: PropTypes.shape({
        images: PropTypes.arrayOf(PropTypes.shape({
            url: PropTypes.string
        })),
        name: PropTypes.string,
        external_urls: PropTypes.shape({
            spotify: PropTypes.string
        }),
        followers: PropTypes.shape({
            total: PropTypes.number
        }),
        popularity: PropTypes.number
    })
}

ArtistInfo.defaultProps = {
    artistInfo: {
        images: [{url:spotifyDefaultImage}],
        name: "",
        external_urls:{spotify: null},
        followers: {total:0},
        popularity: 0
    }
}

const mapStateToProps = store => ({
    artistInfo: store.artistState.artistInfo,
    theme: store.themeState.theme,
    language: store.languageState.language
})

export default connect(mapStateToProps)(ArtistInfo);