import { InputStyled } from "./styled";

const Input = ({placeholder, propRef}) => {
    return(
        <InputStyled ref={propRef} placeholder={placeholder}/>
    )
}

export default Input;