import { InputStyled } from "./styled";

const Input = (props) => {
    return(
        <InputStyled {...props} ref={props.propRef}/>
    )
}

export default Input;