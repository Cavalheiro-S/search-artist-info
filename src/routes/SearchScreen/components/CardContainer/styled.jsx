import styled from "styled-components"

export const CardContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 48px 0;
    gap: 48px;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`