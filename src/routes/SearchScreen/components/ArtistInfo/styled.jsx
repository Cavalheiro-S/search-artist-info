import styled from "styled-components";
import { styles } from "assets/style/global";

export const ImgArtist = styled.img`
    width: 180px;
    height: 180px;
`
export const ArtistInfoStyled = styled.div`
    display: flex;
    gap: 24px;
`
export const ArtistDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    height: 180px;
`
export const ArtistName = styled.h2`
    color: white;
    margin: 0;
`
export const ArtistNumbers = styled.div`
    display: flex;
    gap: 24px;
`
export const ArtistLinkSpotify = styled.a`
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