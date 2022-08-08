import { HeaderStyled } from "./styled";
import LanguageIcon from "assets/imgs/clarity_language-line.svg";

const Header = () => {
    return (
        <HeaderStyled color="dark">
            <LanguageIcon/>
        </HeaderStyled>
    )
}

export default Header