import { Button } from "components";
import { ContainerHome, SubTitleHome, TitleHome } from "./styled";

const Home = () => {

    return (
        <ContainerHome>
            <TitleHome>Descubra informações sobre seu artista ou banda favorita</TitleHome>
            <SubTitleHome>Basta digitar o nome do seu artista ou banda e clicar em pesquisar , que nós trazemos as informações sobre as melhores músicas e seus últimos albums</SubTitleHome>
            <Button styles={{ alignSelf: "start" }} />
        </ContainerHome>
    )
}

export default Home;