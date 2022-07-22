import { useRef } from "react";
import { Input, Button } from "components";
import { SearchBarStyled, SearchTitle } from "./styled";

const SearchBar = ({ onClick }) => {

    const inputRef = useRef();

    const onKeyDown = (event) => {
        if(event.key === "Enter"){
            onClick(inputRef.current.value)
        }
    }

    return (
        <>
            <SearchTitle>Search a artist:</SearchTitle>
            <SearchBarStyled>
                <Input onKeyDown={onKeyDown} propRef={inputRef} placeholder="Type a artist name" />
                <Button onClick={() => onClick(inputRef.current.value)} color="primary">
                    Search
                </Button>
            </SearchBarStyled>
        </>
    )
}

export default SearchBar