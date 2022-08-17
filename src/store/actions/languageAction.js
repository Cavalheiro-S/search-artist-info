const { TOGGLE_LANGUAGE } = require("./actionTypes");

const toggleLanguage = state => ({
    type: TOGGLE_LANGUAGE,
    language: state
})

export default toggleLanguage;