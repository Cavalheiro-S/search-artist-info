import styled from "styled-components";
import { styles } from "assets/style/global";

const InputStyled = styled.input`
    border: 1px solid #c3c3c3;
    border-radius: 48px;
    height: 48px;
    width: 80%;
    color: ${styles.color.secondary};
    background-color: #f4f4f4;
    outline: none;
    padding: 0 24px;
`

const Input = ({placeholder, propRef}) => {

    return(
        <InputStyled ref={propRef} placeholder={placeholder}/>
    )
}

export default Input;