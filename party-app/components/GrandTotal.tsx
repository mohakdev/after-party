import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { accentColor, greyColor, whiteColor } from '../styles/colors';

interface GrandTotalProps {
    totalPrice: number;
}

const GrandTotal = (props: GrandTotalProps) => {
    return (
        <View style={styles.box}>
            <Text style={styles.label}>Grand Total</Text>
            <Text style={[styles.label, { color: accentColor }]}>₹{props.totalPrice.toString()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '95%',
        padding: 8,
        backgroundColor: "#363636",
        marginVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        overflow: 'hidden',
    },
    label: {
        fontSize: 18,
        fontFamily: 'TiltWarp',
        color: whiteColor,
    }
});

export default GrandTotal