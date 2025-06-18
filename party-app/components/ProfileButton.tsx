import { View, Text, Image } from 'react-native';
import React from 'react';
import homeStyle from '../styles/homeStyles';

const ProfileButton = () => {
    return (
        <Image style={homeStyle.icon} source={require('../assets/profile-user.png')} />
    )
}

export default ProfileButton;