import { styles } from "assets/style/global";
import { getThemeColor } from "assets/style/propsFunctions";
import styled from "styled-components";

export const TitleIllustrationPlaySong = styled.h3`
    font-size: 24px;
    margin: 0;
    color: ${() => getThemeColor("text")};
    @media screen and (max-width: 768px) {
        text-align: center;
    }
`

export const SubTitleIllustrationPlaySong = styled.h4`
    font-size: 16px;
    font-weight: normal;
    margin: 0;
    color: ${() => getThemeColor("text")};

    @media screen and (max-width: 768px) {
        text-align: center;
    }
`

export const TitleHighlight = styled.span`
    color: ${styles.color.primary};
`

export const ContainerIllustration = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
`