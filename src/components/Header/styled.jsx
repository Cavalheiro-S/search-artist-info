import { styledPropsBackgroundColor, styledPropsColor } from "assets/style/propsFunctions";

const { default: styled } = require("styled-components");

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4rem;
    width: 100%;
    height: 10%;
    background-color: ${styledPropsBackgroundColor};
    color: ${styledPropsColor};
`

export const ContainerIcons = styled.div`
    display: flex;
    gap: 24px;
`