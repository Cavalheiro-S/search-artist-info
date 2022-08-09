import { Route, Routes, BrowserRouter } from "react-router-dom";
import Container from "./Container";
import Home from "./Home";
import SearchScreen from "./SearchScreen";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Container/>}>
                    <Route path="/" element={<Home />} />
                    <Route path="search" element={<SearchScreen />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;