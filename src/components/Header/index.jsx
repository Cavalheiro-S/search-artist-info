import LanguageIconDark from "assets/imgs/languageIconDark.svg";
import LanguageIconLight from "assets/imgs/languageIconLight.svg";
import ThemeIconDark from "assets/imgs/themeIconDark.svg";
import ThemeIconLight from "assets/imgs/themeIconLight.svg";
import { getActualLanguage } from "data/language";
import { connect, useDispatch } from "react-redux/es/exports";
import { clickUpdateTheme } from "store/actions";
import toggleLanguage from "store/actions/languageAction";
import { ContainerIcons, HeaderStyled, IconStyled, LinkStyled } from "./styled";

const Header = ({ theme }) => {

    let actualLanguage = getActualLanguage();
    const dispatch = useDispatch();

    const changeLanguageIcon = () => {
        if (theme === "dark") {
            return LanguageIconDark
        }
        return LanguageIconLight;
    }

    const changeThemeIcon = () => {
        if (theme === "dark") {
            return ThemeIconDark
        }
        return ThemeIconLight;
    }
    return (
        <HeaderStyled>
            <LinkStyled to="/">{actualLanguage.header.madeBy}</LinkStyled>
            <ContainerIcons>
                <IconStyled src={changeLanguageIcon()} onClick={() => dispatch(toggleLanguage())} alt={actualLanguage.header.alt.language} />
                <IconStyled src={changeThemeIcon()} onClick={() => dispatch(clickUpdateTheme())} alt={actualLanguage.header.alt.theme} />
            </ContainerIcons>
        </HeaderStyled>
    )
}

const mapStateToProps = store => ({
    language: store.languageState.language,
    theme: store.themeState.theme
})

export default connect(mapStateToProps)(Header);