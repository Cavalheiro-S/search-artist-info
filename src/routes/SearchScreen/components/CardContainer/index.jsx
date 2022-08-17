import { Card } from "components";
import { getActualLanguage } from "data/language";
import { connect } from "react-redux";
import { CardContainerStyled } from "./styled";

const CardContainer = ({ cards, type }) => {

    let previousCard = cards[0];
    let actualLanguage = getActualLanguage();
    const cardsRender = (card, index) => {
        if (type === "tracks") {
            previousCard = cards[index];
            return (
                <Card key={card.id} imgSrc={card.album.images[0].url} title={card.name} subtitle={card.album.name} alt={actualLanguage.searchScreen.cardContainer.alt.album} />
            )
        }
        if (type === "albums" && previousCard.release_date !== card.release_date) {
            previousCard = cards[index];
            return (
                <Card key={card.id} imgSrc={card.images[0].url} title={card.name} subtitle={card.release_date} alt={actualLanguage.searchScreen.cardContainer.alt.album} />
            )
        }
    }
    return (
        <CardContainerStyled>
            {cards.map(cardsRender)}
        </CardContainerStyled>
    )
}

const mapStateToProps = store => ({
    theme: store.themeState.theme,
    language: store.languageState.language
})

export default connect(mapStateToProps)(CardContainer);