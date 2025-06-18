import { StyleSheet } from "react-native";
import { accentColor, greyColor, whiteColor } from "./colors";

const homeStyle = StyleSheet.create({
    icon: {
        height: 42,
        width: 42
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        color: greyColor,
        fontSize: 16,
        fontFamily: 'RadioCanada',
    },
    cityText: {
        color: whiteColor,
        fontFamily: 'TiltWarp',
        fontSize: 30,
    },
    searchView: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        minWidth: 10,
        borderBottomWidth: 3,
        borderColor: greyColor,
    },
    searchText: {
        flexGrow: 1,
        color: greyColor,
        fontSize: 18,
        fontFamily: 'RadioCanada',
    },
    headingText: {
        fontSize: 30,
        color: accentColor,
        fontFamily: 'TiltWarp'
    },
    partyButtonStyle: {
        height: 200,
        width: '95%',
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius: 16,
        overflow: 'hidden', // clips corners of image and blur view
    },
    partyImage: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    partyNameStyle: {
        fontSize: 14,
        color: whiteColor,
        fontFamily: 'TiltWarp'
    },
    partyTimeStyle: {
        fontSize: 10,
        color: whiteColor,
        fontFamily: 'RadioCanada'
    }
});

export default homeStyle;