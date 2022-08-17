import { getThemeColor } from "assets/style/propsFunctions";
import styled, { keyframes } from "styled-components";

const rotateLoadingAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`

export const LoadingStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 24px;
    color: ${() => getThemeColor("text")};
`

export const ImgLoadingStyled = styled.img`
    animation: ${rotateLoadingAnimation} 1s linear infinite;
`