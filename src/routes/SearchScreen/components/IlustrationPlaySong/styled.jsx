import { styles } from "assets/style/global";
import { styledPropsColor } from "assets/style/propsFunctions";
import styled from "styled-components";

export const TitleIlustrationPlaySong = styled.h3`
    font-size: 24px;
    margin: 0;
    color: ${styledPropsColor};
`

export const SubTitleIlustrationPlaySong = styled.h4`
    font-size: 16px;
    font-weight: normal;
    margin: 0;
    color: ${styledPropsColor};
`

export const TitleHighlight = styled.span`
    color: ${styles.color.primary};
`

export const ContainerIlustration = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
`