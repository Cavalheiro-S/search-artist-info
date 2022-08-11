import Ilustration from "assets/imgs/ilustration_Play_song.svg";
import { ContainerIlustration, IlustrationSubTitle, IlustrationTitle, TitleHighlight } from "./styled";

const IlustrationPlaySong = () => {
    return (
        <ContainerIlustration>
            <img src={Ilustration} alt="Ilustration of a man play guitar" />
            <IlustrationTitle textColor="light">
                No artist searched <TitleHighlight>yet</TitleHighlight> ...
            </IlustrationTitle>
            <IlustrationSubTitle>
            Search a name of a artist to discover your songs and albums 
            </IlustrationSubTitle>
        </ContainerIlustration>

    )
}

export default IlustrationPlaySong;