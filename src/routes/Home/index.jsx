import { getActualLanguage } from "data/language";
import { connect } from "react-redux";
import reactStringReplace from "react-string-replace";
import { ContainerHome, LinkRouter, SubTitleHome, TextHighlight, TitleHome } from "./styled";

const Home = () => {
    let actualLanguage = getActualLanguage();

    const formatTitle = () => {
        let {text,highlight} = actualLanguage.home.title;
        return reactStringReplace(text, highlight, (match, index) => (<TextHighlight key={match+index}>{match}</TextHighlight>))
    }
    
    const formatSubTitle = () => {
        let {text,highlight} = actualLanguage.home.subTitle;
        return reactStringReplace(text, highlight, (match, index) => (<TextHighlight key={match+index}>{match}</TextHighlight>))
    }
    return (
        <ContainerHome>
            <TitleHome>{formatTitle()}</TitleHome>
            <SubTitleHome>{formatSubTitle()}</SubTitleHome>
            <LinkRouter to="/search">{actualLanguage.home.buttonAction}</LinkRouter>
        </ContainerHome>
    )
}

const mapStateToProps = store => ({
    language: store.languageState.language,
    theme: store.themeState.theme
})


export default connect(mapStateToProps)(Home);