import { Button } from "components";
import { TabButtonsStyled } from "./styled";

const TabButtons = ({ tabActive, setTabActive }) => {

    const handleClick = (tabName) => {
        setTabActive(tabName);
    }

    const handleTabChange = () => {
        if (tabActive === "tracks") {
            return (
                <TabButtonsStyled>
                    <Button onClick={() => handleClick("tracks")} textColor="dark">Top Tracks</Button>
                    <Button onClick={() => handleClick("albums")} backgroundColor="lightGray" textColor="light">Albums</Button>
                </TabButtonsStyled>
            )
        }
        if (tabActive === "albums") {
            return (
                <TabButtonsStyled>
                    <Button onClick={() => handleClick("tracks")} backgroundColor="lightGray" textColor="light">Top Tracks</Button>
                    <Button onClick={() => handleClick("albums")} textColor="dark">Albums</Button>
                </TabButtonsStyled>
            )
        }
    }

    return handleTabChange();
}

export default TabButtons;