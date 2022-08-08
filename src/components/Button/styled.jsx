import { styledPropsBackgroundColor, styledPropsColor } from "assets/style/propsFunctions";
import styled from "styled-components";


export const ButtonStyled = styled.button`
    border: none;
    border-radius: 48px;
    background-color: ${styledPropsBackgroundColor};
    color: ${styledPropsColor};
    padding: 16px 32px;
    font-weight: bold;
    cursor: pointer;
    transition: ease all 0.2s;
`