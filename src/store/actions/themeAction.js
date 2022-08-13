import { CLICK_UPDATE_THEME } from "./actionTypes";

export const clickUpdateTheme = value => {
    return {
        type: CLICK_UPDATE_THEME,
        theme: value
    }
}