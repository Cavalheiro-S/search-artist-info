import styled from "styled-components";


const ContentNotFoundedStyled = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`

const ContentNotFounded = ({ queryNotFounded }) => {

    return (
        <ContentNotFoundedStyled>
            <h3>No Results finded for "{queryNotFounded}"</h3>
            <h4>Check if you typed correctly</h4>
        </ContentNotFoundedStyled>
    )
}

export default ContentNotFounded;