import { ContainerStyled } from "./styled";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
const Container = ({ children }) => {

    return (
        <>
            <Header />
            <ContainerStyled>
                <Outlet />
            </ContainerStyled>
        </>
    )
}

export default Container;