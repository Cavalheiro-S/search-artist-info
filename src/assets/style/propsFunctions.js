import store from "store/store";
import { styles } from "./global";

export const styledPropsBackgroundColor = (props) => {
    if (props.backgroundColor === "primary") return styles.color.primary;
    if (props.backgroundColor === "light") return styles.color.light;
    if (props.backgroundColor === "dark") return styles.color.dark;
    if (props.backgroundColor === "lightGray") return styles.color.lightGray;
    if (props.backgroundColor === "hardDark") return styles.color.hardDark;
    return "#fff"
}

export const styledPropsColor = (props) => {
    if (props.textColor === "primary") return styles.color.dark;
    if (props.textColor === "light") return styles.color.light;
    if (props.textColor === "dark") return styles.color.dark;
    if (props.textColor === "lightGray") return styles.color.lightGray;
    if (props.textColor === "hardDark") return styles.color.hardDark;
    return "#fff";
}

export const getThemeColor = (type) => {
    const actualTheme = store.getState().themeState.theme;
    switch (type) {
        case "text":
            return actualTheme === "dark" ? styles.color.light : styles.color.dark;;

        case "background":
            return actualTheme === "dark" ? styles.color.dark : styles.color.light;

        case "highlight":
            return actualTheme === "dark" ? styles.color.primary : styles.color.primary;

        case "input":
            return actualTheme === "dark" ? styles.color.light : styles.color.lightGray;

        case "inputEmpty":
            return actualTheme === "dark" ? styles.color.error : styles.color.error;
            
        case "card":
            return actualTheme === "dark" ? styles.color.gray : styles.color.light;

        case "buttonActived":
            return actualTheme === "dark" ? styles.color.primary : styles.color.primary;

        case "buttonDisabled":
            return actualTheme === "dark" ? styles.color.lightGray : styles.color.gray;

        case "actionButtonText":
            return actualTheme === "dark" ? styles.color.dark : styles.color.light;

        case "header":
            return actualTheme === "dark" ? styles.color.hardDark : styles.color.light;
        
        case "headerBorder":
            return actualTheme === "dark" ? styles.color.hardDark : styles.color.lightGray;

        case "cardBorder":
            return actualTheme === "dark" ? styles.color.dark : styles.color.lightGray;
            
        default:
            return actualTheme === "dark" ? styles.color.dark : styles.color.dark;
    }

}
