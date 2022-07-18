import { useRef } from "react";
import styled from "styled-components";
import { Input, Button } from "../../../../components";

const SearchBarStyled = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
const SearchTitle = styled.h1`
    margin: 0 12px;
    font-size: 18px;
    color: white;
`
const SearchBar = ({onClick}) => {

    const inputRef = useRef();

    return (
        <>
            <SearchTitle>Search a artist:</SearchTitle>
            <SearchBarStyled>
                <Input propRef={inputRef} placeholder="Type a artist name" />
                <Button onClick={() => onClick(inputRef.current.value)} color="primary">
                    Search
                </Button>
            </SearchBarStyled>
        </>
    )
}

export default SearchBar