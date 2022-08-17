import { getThemeColor } from "assets/style/propsFunctions";
import styled from "styled-components";

export const CatchWarning = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: ${getThemeColor("text")};
`