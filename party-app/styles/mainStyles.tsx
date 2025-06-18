import { StyleSheet } from "react-native";
import { backgroundColor } from "./colors";

const mainStyles = StyleSheet.create({
    screen: {
        display: 'flex',
        flexGrow: 1,
        paddingTop: 30,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: backgroundColor,
    },
});

export default mainStyles;