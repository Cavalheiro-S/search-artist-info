import { getThemeColor } from "assets/style/propsFunctions"
import { Button, Input } from "components"
import styled from "styled-components"

export const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const SearchBarStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 6rem;
    width: 100%;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 24px;
        margin-bottom: 2rem;
    }
`


export const SearchTitle = styled.h2`
    margin: 12px;
    font-size: 1.2rem;
    color: ${() => getThemeColor("text")};
    `

export const EmptyMessage = styled.span`
    margin: 8px;
    padding: 4px;
    border-radius: 8px;
    font-weight: bold;
    color: ${() => getThemeColor("inputEmpty")};
    background-color: white;
    align-self: start;
    font-size: 0.8rem;
    `

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const ButtonStyled = styled(Button)`
        @media screen and (max-width: 768px) {
            width: 100%;
        }
    `

export const InputStyled = styled(Input)`
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`