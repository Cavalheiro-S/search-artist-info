import { Button } from "components";
import { ContainerHome, LinkRouter, SubTitleHome, TextHighlight, TitleHome } from "./styled";

const Home = () => {

    return (
        <ContainerHome backgroundColor="dark">
            <TitleHome>Discover informations about your<br/><TextHighlight> favorite </TextHighlight>artist or band</TitleHome>
            <SubTitleHome>Only type a name of your artist or band and click in search, that we <br/> bright informations about the<TextHighlight> top </TextHighlight>musics and your last albums</SubTitleHome>
            <Button textColor="dark" backgroundColor="primary">
                <LinkRouter to="/search" textColor="dark">Discover Informations</LinkRouter>
            </Button>
        </ContainerHome>
    )
}

export default Home;