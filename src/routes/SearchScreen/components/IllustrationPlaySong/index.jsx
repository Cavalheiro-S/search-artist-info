import IllustrationDark from "assets/imgs/illustrationPlaySongDark.svg";
import IllustrationLight from "assets/imgs/illustrationPlaySongLight.svg";
import { getActualLanguage } from "data/language";
import { connect } from "react-redux";
import reactStringReplace from "react-string-replace";
import { ContainerIllustration, SubTitleIllustrationPlaySong, TitleHighlight, TitleIllustrationPlaySong } from "./styled";

const IllustrationPlaySong = ({ theme }) => {

    let actualLanguage = getActualLanguage();

    const changeThemeImage = () => {
        if (theme === "light") {
            return IllustrationLight
        }
        return IllustrationDark

    }
    const formatTitle = () => {
        let { title, titleHighlight } = actualLanguage.searchScreen.illustrationPlaySong;
        return reactStringReplace(title, titleHighlight, (match, index) => <TitleHighlight key={match + index}>{match}</TitleHighlight>)
    }
    return (
        <ContainerIllustration>
            <img src={changeThemeImage()} alt={actualLanguage.searchScreen.illustrationPlaySong.alt} />
            <TitleIllustrationPlaySong>
                {formatTitle()}
            </TitleIllustrationPlaySong>
            <SubTitleIllustrationPlaySong>
                {actualLanguage.searchScreen.illustrationPlaySong.subTitle}
            </SubTitleIllustrationPlaySong>
        </ContainerIllustration>

    )
}

const mapStateToProps = store => ({
    language: store.languageState.language,
    theme: store.themeState.theme
})

export default connect(mapStateToProps)(IllustrationPlaySong);