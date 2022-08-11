import Ilustration from "assets/imgs/ilustration_Play_song.svg";
import { ContainerIlustration, SubTitleIlustrationPlaySong, TitleIlustrationPlaySong, TitleHighlight } from "./styled";

const IlustrationPlaySong = () => {
    return (
        <ContainerIlustration>
            <img src={Ilustration} alt="Ilustration of a man play guitar" />
            <TitleIlustrationPlaySong textColor="light">
                No artist searched <TitleHighlight>yet</TitleHighlight> ...
            </TitleIlustrationPlaySong>
            <SubTitleIlustrationPlaySong>
            Search a name of a artist to discover your songs and albums 
            </SubTitleIlustrationPlaySong>
        </ContainerIlustration>

    )
}

export default IlustrationPlaySong;