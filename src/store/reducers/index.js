import { combineReducers } from "redux";
import ArtistReducer from "./artistReducer";
import LanguageReducer from "./languageReducer";
import ResultReducer from "./resultReducer";
import ThemeReducer from "./themeReducer";

const Reducers = combineReducers({
    themeState: ThemeReducer,
    resultState: ResultReducer,
    artistState: ArtistReducer,
    languageState: LanguageReducer,
})

export default Reducers;