import { CLICK_UPDATE_THEME } from "store/actions/actionTypes";

const initialState = {
    theme: "dark"
}

const ThemeReducer = (state = initialState, action) => {

    switch (action.type) {
        case CLICK_UPDATE_THEME:
            if (state.theme === "dark") {
                return {
                    ...state,
                    theme: "light"
                }
            };
            return {
                ...state,
                theme: "dark"
            };
        default:
            return state;
    }
}

export default ThemeReducer