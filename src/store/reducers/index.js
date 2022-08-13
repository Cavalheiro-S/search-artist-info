import { combineReducers } from "redux";
import ArtistReducer from "./artistReducer";
import ResultReducer from "./resultReducer";
import ThemeReducer from "./themeReducer";

const Reducers = combineReducers({
    themeState: ThemeReducer,
    resultState: ResultReducer,
    artistState: ArtistReducer
})

export default Reducers;