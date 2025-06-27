import { StyleSheet } from "react-native";
import { greyColor, whiteColor } from "./colors";

const loginStyle = StyleSheet.create({
    heading: {
        color: whiteColor,
        fontSize: 50,
        fontFamily: 'TiltWarp',
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginHorizontal: '3%',
        borderRadius: 18,
        borderWidth: 3,
        padding: 10,
        borderColor: '#363636',
        borderStyle: 'solid',
    },
    boxHeading: {
        color: whiteColor,
        fontSize: 26,
        fontFamily: 'TiltWarp',
    },
    boxLink: {
        color: whiteColor,
        fontSize: 16,
        fontFamily: 'RadioCanada',
        fontStyle: 'italic',
    },
    textInput: {
        color: whiteColor,
        fontSize: 16,
        fontFamily: 'RadioCanada',

        alignSelf: 'center',
        width: '90%',
        height: 50,
        borderWidth: 2,
        borderColor: '#363636',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
});

export default loginStyle;