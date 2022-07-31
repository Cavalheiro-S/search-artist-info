import {ButtonStyled} from "./styled";

const Button = (props) => {
    return (
        <ButtonStyled {...props}>
            {props.children}
        </ButtonStyled>
    )
}
export default Button;