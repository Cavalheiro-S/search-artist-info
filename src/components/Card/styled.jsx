import styled from "styled-components";
import { getThemeColor } from "assets/style/propsFunctions";

export const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px;
    width: 180px;
    border-radius: 8px;
    background-color: ${() => getThemeColor("card")};
    color: ${() => getThemeColor("text")};
    border: 1px solid ${() => getThemeColor("cardBorder")};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);;
`
export const Title = styled.span`
    font-weight : bold;
    font-size: 14px;
`

export const SubTitle = styled.span`
    font-weight : regular;
    font-size: 14px;
`