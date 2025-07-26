import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { accentColor, backgroundColor } from '../styles/colors';

interface ButtonProps {
    title: string,
    onClick: () => void;
    alignToBottom?: boolean; // Optional prop to align button to bottom
}

const ActionButton = (props: ButtonProps) => {
    if (props.alignToBottom) {
        return (
            <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
                <Pressable style={style.button} onPress={props.onClick}>
                    <Text style={style.text}>{props.title}</Text>
                </Pressable>
            </View>
        );
    }
    return (
        <Pressable style={style.button} onPress={props.onClick}>
            <Text style={style.text}>{props.title}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    button: {
        backgroundColor: accentColor,
        width: '90%',
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius: 34,
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden', // clips corners of image and blur view
    },
    text: {
        fontSize: 30,
        color: backgroundColor,
        fontFamily: 'TiltWarp',
        alignSelf: 'center',
    }
});

export default ActionButton;