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
    profileIcon: {
        width: 100,
        height: 100,
    },
    profilePageButton: {
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#363636',
        borderRadius: 8,
        marginVertical: 10,
    },
    profilePageButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: 10,
    },
});

export default mainStyles;