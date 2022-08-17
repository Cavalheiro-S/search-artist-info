import IllustrationDark from "assets/imgs/illustrationNotFindedDark.svg";
import IllustrationLight from "assets/imgs/illustrationNotFindedLight.svg";
import { getActualLanguage } from "data/language";
import { connect } from "react-redux";
import { ContainerIllustrationNotFinded, SubTitleIllustrationNotFinded, TitleIllustrationNotFinded } from "./styled";

const IllustrationNotFinded = ({ queryNotFinded, theme }) => {

    let actualLanguage = getActualLanguage();
    let queryNotFindedFormated = `${actualLanguage.searchScreen.illustrationNotFinded.title} "${queryNotFinded}"`

    const changeThemeImage = () => {
        if (theme === "light") {
            return IllustrationLight
        }
        return IllustrationDark;
    }
    return (
        <ContainerIllustrationNotFinded>
            <img src={changeThemeImage()} alt={actualLanguage.searchScreen.illustrationNotFinded.alt} />
            <TitleIllustrationNotFinded>
                {queryNotFindedFormated}
            </TitleIllustrationNotFinded>
            <SubTitleIllustrationNotFinded>
                {actualLanguage.searchScreen.illustrationNotFinded.subTitle}
            </SubTitleIllustrationNotFinded>
        </ContainerIllustrationNotFinded>
    )
}

const mapStateToProps = store => ({
    language: store.languageState.language,
    theme: store.languageState.theme
})

export default connect(mapStateToProps)(IllustrationNotFinded);