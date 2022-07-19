import styled from "styled-components";
import { styles } from "assets/style/global";

export const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px;
    width: 180px;
    border-radius: 8px;
    background-color: ${styles.color.secondary};
    color: white;
`
export const Title = styled.span`
    font-weight : bold;
    font-size: 14px;
`

export const SubTitle = styled.span`
    font-weight : regular;
    font-size: 14px;
`