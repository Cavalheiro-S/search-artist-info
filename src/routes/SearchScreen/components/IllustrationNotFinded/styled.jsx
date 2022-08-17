import { getThemeColor } from "assets/style/propsFunctions";
import styled from "styled-components";

export const ContainerIllustrationNotFinded = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`

export const TitleIllustrationNotFinded = styled.h3`
    color: ${() => getThemeColor("text")};
    font-size: 1.6rem;
    margin: 0;
`

export const SubTitleIllustrationNotFinded = styled.h4`
    color: ${() => getThemeColor("text")};
    font-size: 1rem;
    font-weight: normal;
    margin: 0;
`

