import { ContentNotFoundedStyled } from "./styled";

const ContentNotFounded = ({ queryNotFounded }) => {
    return (
        <ContentNotFoundedStyled>
            <h3>No Results finded for "{queryNotFounded}"</h3>
            <h4>Check if you typed correctly</h4>
        </ContentNotFoundedStyled>
    )
}

export default ContentNotFounded;