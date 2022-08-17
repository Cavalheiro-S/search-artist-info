import { Button } from "components";
import { getActualLanguage } from "data/language";
import { connect } from "react-redux";
import { TabButtonsStyled } from "./styled";

const TabButtons = ({ tabActive, setTabActive }) => {

    const actualLanguage = getActualLanguage();
    const handleClick = (tabName) => {
        setTabActive(tabName);
    }

    const handleTabChange = () => {
        if (tabActive === "tracks") {
            return (
                <TabButtonsStyled>
                    <Button btnType="buttonActived" onClick={() => handleClick("tracks")}>{actualLanguage.searchScreen.tabButtons.topTracks}</Button>
                    <Button btnType="buttonDisabled" onClick={() => handleClick("albums")}>{actualLanguage.searchScreen.tabButtons.albums}</Button>
                </TabButtonsStyled>
            )
        }
        if (tabActive === "albums") {
            return (
                <TabButtonsStyled>
                    <Button btnType="buttonDisabled" onClick={() => handleClick("tracks")}>{actualLanguage.searchScreen.tabButtons.topTracks}</Button>
                    <Button btnType="buttonActived" onClick={() => handleClick("albums")}>{actualLanguage.searchScreen.tabButtons.albums}</Button>
                </TabButtonsStyled>
            )
        }
    }

    return handleTabChange();
}

const mapStateToProps = store => ({
    language: store.languageState.language
})

export default connect(mapStateToProps)(TabButtons);