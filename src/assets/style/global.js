import { createGlobalStyle } from "styled-components";

const primary = "#1ED760";
const secondary = "#4B4B4B";
const dark = "#333";

const styles = {
    color: {
        primary,
        secondary,
        dark
    }
}

const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Inter', sans-serif;
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