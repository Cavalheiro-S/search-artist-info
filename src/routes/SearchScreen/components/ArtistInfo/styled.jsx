import styled from "styled-components";
import { getThemeColor } from "assets/style/propsFunctions";
import { styles } from "assets/style/global";

export const ImgArtist = styled.img`
    width: 200px;
    height: 200px;
`
export const ArtistInfoStyled = styled.div`
    display: flex;
    gap: 24px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`
export const ArtistDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${() => getThemeColor("text")};
    height: 180px;
    
    @media screen and (max-width: 768px) {
        align-items: center;
    }
`

export const ArtistInfoSpan = styled.span`
    color: ${() => getThemeColor("text")};
`
export const ArtistName = styled.h2`
    color: ${() => getThemeColor("text")};
    font-size: 1.1rem;
    margin: 0;

    @media screen and (max-width: 768px) {
        text-align: center;
    }
`
export const ArtistNumbers = styled.div`
    display: flex;
    font-size: .9rem;
    gap: 24px;
`
export const ArtistLinkSpotify = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-decoration: none;
    color: ${styles.color.dark};
    padding: 12px;
    border-radius: 48px;
    width: 160px;
    font-weight: bold;
    font-size: .8rem;
    background-color: ${() => getThemeColor("buttonActived")};
    transition: ease .1s all;
    &:hover{
        transform: scale(105%);
    }
`