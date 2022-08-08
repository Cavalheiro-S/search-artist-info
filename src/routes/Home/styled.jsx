import { styles } from "assets/style/global"
import { styledPropsBackgroundColor, styledPropsColor } from "assets/style/propsFunctions"
import { Link } from "react-router-dom"
import styled from "styled-components"

export const TitleHome = styled.h1`
    font-weight: bold;
    color: ${styledPropsColor};
    font-size: 40px;
`

export const SubTitleHome = styled.h2`
    font-size: 24px;
    color: ${styledPropsColor};
`

export const ContainerHome = styled.div`
    display: flex;
    background-color: ${styledPropsBackgroundColor};
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 10rem;
    height: 100%;
    gap: 32px;
`

export const TextHighlight = styled.span`
    color: ${styles.color.primary};
`

export const LinkRouter = styled(Link)`
    text-decoration: none;
    color: ${styledPropsColor};
`