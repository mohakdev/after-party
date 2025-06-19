import { StyleSheet } from "react-native";
import { accentColor, whiteColor } from "./colors";

const partyStyle = StyleSheet.create({
    imageView: {
        width: '100%',
        height: '35%',
        overflow: 'hidden',
        borderWidth: 0,
        borderBottomStartRadius: 16,
        borderBottomEndRadius: 16,
    },
    blurView: {
        flex: 1,
        flexGrow: 1,
    },
    header: {
        fontSize: 45,
        color: whiteColor,
        fontFamily: 'TiltWarp'
    },
    subHeader: {
        fontSize: 26,
        color: accentColor,
        fontFamily: 'TiltWarp'
    },
    content: {
        fontSize: 18,
        color: whiteColor,
        fontFamily: 'RadioCanada'
    }
});

export default partyStyle;