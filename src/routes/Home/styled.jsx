import { getThemeColor } from "assets/style/propsFunctions"
import { Link } from "react-router-dom"
import styled from "styled-components"

export const ContainerHome = styled.div`
    display: flex;
    background-color: ${() => getThemeColor("background")};
    flex-direction: column;
    min-height: 90%;
    align-items: flex-start;
    justify-content: center;
    padding: 4rem;
    gap: 32px;
`

export const TitleHome = styled.h1`
    max-width: 800px;
    font-weight: bold;
    margin: 0;
    color: ${() => getThemeColor("text")};
    font-size: 40px;
`

export const SubTitleHome = styled.h2`
    font-size: 24px;
    max-width: 900px;
    margin: 0;
    color: ${() => getThemeColor("text")};
`

export const TextHighlight = styled.span`
    color: ${() => getThemeColor("highlight")};
`

export const LinkRouter = styled(Link)`
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    color: ${() => getThemeColor("actionButtonText")};
    background-color: ${() => getThemeColor("buttonActived")};
    padding: 16px 24px;
    border-radius: 48px;
    transition: .1s ease all;
    :hover{
        transform: scale(110%);
    }
`