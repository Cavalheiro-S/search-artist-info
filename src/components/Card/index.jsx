import { CardStyled, Title, SubTitle } from "./styled"
const Card = ({ imgSrc, title, subtitle, alt }) => {

    return (
        <CardStyled>
            <img src={imgSrc} alt={alt}/>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
        </CardStyled>
    )
}

export default Card