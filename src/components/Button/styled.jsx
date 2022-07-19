import {styles} from "assets/style/global";
import styled from "styled-components";

export const styledPropsBackgroundColor = (props) => {
    if(props.color === "primary") return styles.color.primary;
    if(props.color === "secondary") return styles.color.secondary;
    return "#fff"
}

export const styledPropsColor = (props) => {
    if(props.color === "primary") return styles.color.dark;
    if(props.color === "secondary") return "#fff";
    return styles.color.dark;
}
export const ButtonStyled = styled.button`
    border: none;
    border-radius: 48px;
    background-color: ${styledPropsBackgroundColor};
    color: ${styledPropsColor};
    height: 48px;
    width: 160px;
    font-weight: bold;
    cursor: pointer;
    transition: ease all 0.2s;
`