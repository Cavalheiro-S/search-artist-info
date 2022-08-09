import { styles } from "./global";

export const styledPropsBackgroundColor = (props) => {
    if(props.backgroundColor === "primary") return styles.color.primary;
    if(props.backgroundColor === "light") return styles.color.light;
    if(props.backgroundColor === "dark") return styles.color.dark;
    if(props.backgroundColor === "lightGray") return styles.color.lightGray;
    if(props.backgroundColor === "hardDark") return styles.color.hardDark;
    return "#fff"
}

export const styledPropsColor = (props) => {
    if(props.textColor === "primary") return styles.color.dark;
    if(props.textColor === "light") return styles.color.light;
    if(props.textColor === "dark") return styles.color.dark;
    if(props.textColor === "lightGray") return styles.color.lightGray;
    if(props.textColor === "hardDark") return styles.color.hardDark;
    return "#fff";
}