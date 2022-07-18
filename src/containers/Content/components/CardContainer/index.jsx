import styled from "styled-components";
import { Card } from "components";

const CardContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 48px 0;
    gap: 48px;
    width: 100%;
`

const CardContainer = ({ cards, type }) => {

    let previousCard = cards[0];

    const cardsRender = (card,index) => {
        if (type === "tracks") {
            previousCard = cards[index];
            return (
                <Card key={card.id} imgSrc={card.album.images[0].url} title={card.name} subtitle={card.album.name} />
            )
        }
        if (type === "albums" && previousCard.release_date !== card.release_date) {
            previousCard = cards[index];
            return (
                <Card key={card.id} imgSrc={card.images[0].url} title={card.name} subtitle={card.release_date} />
            )
        }
    }
    return (
        <CardContainerStyled>
            {cards.map(cardsRender)}
        </CardContainerStyled>
    )
}

export default CardContainer;