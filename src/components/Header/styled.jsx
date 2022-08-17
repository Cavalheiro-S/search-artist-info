import { getThemeColor } from "assets/style/propsFunctions";
import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4rem;
    width: 100%;
    height: 10%;
    background-color: ${() => getThemeColor("header")};
    border-bottom: 1px solid ${() => getThemeColor("headerBorder")};
    color: ${() => getThemeColor("text")};
`

export const ContainerIcons = styled.div`
    display: flex;
    gap: 24px;
`

export const IconStyled = styled.img`
    cursor: pointer;
    transition: .1s;
    :hover{
        transform: scale(110%);
    }
`