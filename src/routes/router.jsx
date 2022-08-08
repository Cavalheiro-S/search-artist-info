import { Route, Routes, BrowserRouter } from "react-router-dom";
import Content from "./SearchScreen";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Content/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;