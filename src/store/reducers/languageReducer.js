const { TOGGLE_LANGUAGE } = require("store/actions/actionTypes");

const initialState = {
    language: "en"
}

const LanguageReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_LANGUAGE:
            if (state.language === "en") {

                return {
                    ...state,
                    language: "pt"
                }
            }

            return {
                ...state,
                language: "en"
            }
        default:
            return state
    }
}

export default LanguageReducer;