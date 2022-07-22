import { InputStyled } from "./styled";

const Input = ({placeholder, propRef, onKeyDown}) => {

    return(
        <InputStyled onKeyDown={(event) => onKeyDown(event)} ref={propRef} placeholder={placeholder}/>
    )
}

export default Input;