import { getThemeColor } from "assets/style/propsFunctions";
import styled from "styled-components";

export const ContainerStyled = styled.div`
    padding: 0 5rem;
    min-height: 90%;
    background-color: ${() => getThemeColor("background")};
`
