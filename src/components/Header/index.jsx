import { ContainerIcons, HeaderStyled } from "./styled";
import LanguageIcon from "assets/imgs/clarity_language-line.svg";
import ThemeIcon from "assets/imgs/fluent_dark-theme-20-regular.svg";
const Header = () => {
    return (
        <HeaderStyled backgroundColor="hardDark">
            <>
                Made By © Lucas Cavalheiro
                <ContainerIcons>
                    <img src={LanguageIcon} alt="Language icon" />
                    <img src={ThemeIcon} alt="Theme icon" />
                </ContainerIcons>
            </>
        </HeaderStyled>
    )
}

export default Header