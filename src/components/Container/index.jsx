import styled from "styled-components";

const ContainerStyled = styled.div`
    padding: 2rem 4rem;
`

const Container = ({children}) => {

    <ContainerStyled>
        {children}
    </ContainerStyled>
}

export default Container;