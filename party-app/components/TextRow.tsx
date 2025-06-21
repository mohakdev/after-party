import { View, Text, StyleSheet, ColorValue } from 'react-native'
import React from 'react'
import { greyColor } from '../styles/colors';

interface TextRowProps {
    label: string;
    value: string;
    valueColor?: ColorValue;
}

const TextRow = ({ label, value, valueColor = greyColor }: TextRowProps) => {
    return (
        <View style={styles.row}>
            <Text style={styles.label}>{label}</Text>
            <Text style={[styles.label, { color: valueColor }]}>{value}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    row: {
        width: '95%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    label: {
        fontSize: 18,
        fontFamily: 'RadioCanada',
        color: greyColor,
    },
});

export default TextRow;