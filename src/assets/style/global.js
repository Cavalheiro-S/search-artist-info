import { createGlobalStyle } from "styled-components";

const primary = "#1ED760";
const gray = "#4B4B4B";
const dark = "#333";
const light = "#fff";
const lightGray = "#e7e7e7"
const hardDark = "#242424";
const error = "#F00E0E"

const styles = {
    color: {
        primary,
        lightGray,
        gray,
        dark,
        light,
        hardDark,
        error
    }
}

const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
    }
    body,html{
        margin: 0;
        height: 100%;
        font-size: 18px;
    }
    #root{
        height: 100%;
    }
`
export { styles, GlobalStyle };
