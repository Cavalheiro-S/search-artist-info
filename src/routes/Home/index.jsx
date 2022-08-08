import { Button } from "components";
import { ContainerHome, LinkRouter, SubTitleHome, TextHighlight, TitleHome } from "./styled";

const Home = () => {

    return (
        <ContainerHome backgroundColor="dark">
            <TitleHome>Descubra informações sobre seu<br /> artista ou banda <TextHighlight>favorita</TextHighlight></TitleHome>
            <SubTitleHome>Basta digitar o nome do seu artista ou banda e clicar em pesquisar,<br /> que nós trazemos as informações sobre as <TextHighlight>melhores</TextHighlight> músicas e seus <TextHighlight>últimos</TextHighlight> albums</SubTitleHome>
            <Button textColor="dark" backgroundColor="primary">
                <LinkRouter to="/search" textColor="dark">Descobrir Informações</LinkRouter>
            </Button>
        </ContainerHome>
    )
}

export default Home;