import styled from "styled-components";
import {styles} from "assets/style/global";

const styledPropsBackgroundColor = (props) => {
    if(props.color === "primary") return styles.color.primary;
    if(props.color === "secondary") return styles.color.secondary;
    return "#fff"
}

const styledPropsColor = (props) => {
    if(props.color === "primary") return styles.color.dark;
    if(props.color === "secondary") return "#fff";
    return styles.color.dark;
}

const ButtonStyled = styled.button`
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

const Button = ({children, color, onClick}) => {
    return (
        <ButtonStyled onClick={onClick} color={color}>
            {children}
        </ButtonStyled>
    )
}
export default Button;