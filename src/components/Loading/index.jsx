import imgLoading from "assets/imgs/ant-design_loading-3-quarters-outlined.png";
import { getActualLanguage } from "data/language";
import { connect } from "react-redux";
import { LoadingStyled, ImgLoadingStyled } from "./styled";

const Loading = () => {

    let actualLanguage = getActualLanguage();
    return(
        <LoadingStyled>
            <ImgLoadingStyled src={imgLoading} alt={actualLanguage.searchScreen.loading.alt} />
            <h3>{actualLanguage.searchScreen.loading.text}</h3>
        </LoadingStyled>
    )
}

const mapStateToProps = store => ({
    theme: store.themeState.theme,
    language: store.languageState.language
})

export default connect(mapStateToProps)(Loading); 