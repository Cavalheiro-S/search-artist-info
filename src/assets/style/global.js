import { createGlobalStyle } from "styled-components";

const primary = "#1ED760";
const lightGray = "#4B4B4B";
const dark = "#333";
const light = "#fff";
const hardDark = "#242424";

const styles = {
    color: {
        primary,
        lightGray,
        dark,
        light,
        hardDark
    }
}

const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
    }
    html, #root{
        height: 100%;
    }
    body{
        margin: 0;
        height: 100%;
        background-color: ${dark};
    }
`
export { styles, GlobalStyle };