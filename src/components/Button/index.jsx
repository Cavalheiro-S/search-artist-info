import {ButtonStyled} from "./styled";

const Button = (props) => {
    return (
        <ButtonStyled btnType={props.btnType} {...props}>
            {props.children}
        </ButtonStyled>
    )
}
export default Button;