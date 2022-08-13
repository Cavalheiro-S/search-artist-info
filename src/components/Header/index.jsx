import { ContainerIcons, HeaderStyled, IconStyled } from "./styled";
import LanguageIconLight from "assets/imgs/languageIconLight.svg";
import ThemeIconLight from "assets/imgs/themeIconLight.svg";
import LanguageIconDark from "assets/imgs/languageIconDark.svg";
import ThemeIconDark from "assets/imgs/themeIconDark.svg";
import { connect, useDispatch } from "react-redux/es/exports";
import { clickUpdateTheme } from "store/actions";

const Header = ({theme}) => {

    const dispatch = useDispatch();
    return (
        <HeaderStyled backgroundColor={theme === "dark" ? "hardDark" : "light"}>
            Made By © Lucas Cavalheiro
            <ContainerIcons>
                <IconStyled src={theme === "dark" ? LanguageIconLight : LanguageIconDark} alt="Language icon" />
                <IconStyled src={theme === "dark" ? ThemeIconLight : ThemeIconDark} onClick={() => dispatch(clickUpdateTheme())} alt="Theme icon" />
            </ContainerIcons>
        </HeaderStyled>
    )
}

const mapStateToProps = store => ({
    theme: store.themeState.theme
})

export default connect(mapStateToProps)(Header);