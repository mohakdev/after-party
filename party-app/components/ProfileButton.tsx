import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import homeStyle from '../styles/homeStyles';

interface ProfileButtonProps {
    onClick?: () => void;
}

const ProfileButton = (props: ProfileButtonProps) => {
    function handleProfileClick() {
        // Navigate to profile screen or perform any action 
        console.log("Profile button clicked");
    }
    return (
        <Pressable onPress={props.onClick} style={homeStyle.icon}>
            <Image style={homeStyle.icon} source={require('../assets/profile-user.png')} />
        </Pressable>
    )
}

export default ProfileButton;