import {ButtonStyled} from "./styled";

const Button = ({children, color, onClick}) => {
    return (
        <ButtonStyled onClick={onClick} color={color}>
            {children}
        </ButtonStyled>
    )
}
export default Button;