import { Button } from "components";
import { TabButtonsStyled } from "./styled";

const TabButtons = ({tabActive, setTabActive}) => {

    const handleClick = (tabName) => {
        setTabActive(tabName);
    }

    const handleTabChange = () => {
        if (tabActive === "tracks") {
            return (
                <TabButtonsStyled>
                    <Button onClick={() => handleClick("tracks")}>Top Tracks</Button>
                    <Button onClick={() => handleClick("albums")} color="secondary">Albums</Button>
                </TabButtonsStyled>
            )
        }
        if (tabActive === "albums") {
            return (
                <TabButtonsStyled>
                    <Button onClick={() => handleClick("tracks")} color="secondary">Top Tracks</Button>
                    <Button onClick={() => handleClick("albums")}>Albums</Button>
                </TabButtonsStyled>
            )
        }
    }

    return handleTabChange();
}

export default TabButtons;