import { getThemeColor } from "assets/style/propsFunctions";
import styled from "styled-components";

export const SearchScreenStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 2rem 4rem;
    background-color: ${() => getThemeColor("background")};
    min-height: 90%;

    @media screen and (max-width: 768px) {
        padding: 2rem;
    }

    @media screen and (max-width: 425px) {
        padding: 1rem;
    }
`