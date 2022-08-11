import IlustrationNotFindedSVG from "assets/imgs/ilustration_not_finded.svg"
import { ContainerIlustrationNotFinded, SubTitleIlustrationNotFinded, TitleIlustrationNotFinded } from "./styled";

const IlustrationNotFinded = ({ queryNotFinded }) => {

    return (
        <ContainerIlustrationNotFinded>
            <img src={IlustrationNotFindedSVG} alt="Ilustration with a man search something on a box"/>
            <TitleIlustrationNotFinded>
                No results finded to "{queryNotFinded}"
            </TitleIlustrationNotFinded>
            <SubTitleIlustrationNotFinded>
                Verify if you type correctly
            </SubTitleIlustrationNotFinded>
        </ContainerIlustrationNotFinded>
    )
}

export default IlustrationNotFinded;