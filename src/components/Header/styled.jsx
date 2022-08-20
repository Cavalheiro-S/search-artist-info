import { getThemeColor } from "assets/style/propsFunctions";
import styled from "styled-components";
import { Link } from "react-router-dom";
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

    @media screen and (max-width: 768px) {
        padding: 0 2rem;
        font-size: .9rem;
    }
    @media screen and (max-width: 425px) {
        padding: 0 1rem;
    }
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

export const LinkStyled = styled(Link)`
    color: ${() => getThemeColor("text")};
    text-decoration: none;
    @media screen and (max-width: 425px) {
        width: 60%;
    }
`