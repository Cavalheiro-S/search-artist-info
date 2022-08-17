import { getThemeColor } from "assets/style/propsFunctions";
import styled from "styled-components";

const setBackgroundColor = (props) => {
    return getThemeColor(props.btnType)
}

export const ButtonStyled = styled.button`
    border: none;
    border-radius: 48px;
    background-color: ${setBackgroundColor};
    color: ${() => getThemeColor("actionButtonText")};
    padding: 16px 32px;
    font-weight: bold;
    font-size: .8rem;
    cursor: pointer;
    transition: ease all 0.1s;
    :hover{
        transform: scale(110%);
    }
`