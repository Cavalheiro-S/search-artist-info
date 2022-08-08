import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import SearchScreen from "./SearchScreen";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="search" element={<SearchScreen/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;