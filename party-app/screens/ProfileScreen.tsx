import { View, Text, Image, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import mainStyles from '../styles/mainStyles';
import homeStyle from '../styles/homeStyles';
import { whiteColor } from '../styles/colors';
import ActionButton from '../components/ActionButton';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const ProfileScreen = ({ navigation }: NavigationProps) => {
    return (
        <View style={mainStyles.screen}>
            <View style={{ marginHorizontal: 8, display: 'flex', flexDirection: 'row', marginBottom: 18 }}>
                <Image style={mainStyles.profileIcon} source={require('../assets/profile-user.png')} />
                <Text style={[homeStyle.headingText, { color: whiteColor, marginTop: 30, marginLeft: 30 }]}>Mohak Jain</Text>
            </View>
            <Pressable style={mainStyles.profilePageButton} onPress={() => console.log('Edit Profile Pressed')}>
                <Text style={mainStyles.profilePageButtonText}>Edit Profile</Text>
            </Pressable>

            <Pressable style={mainStyles.profilePageButton} onPress={() => console.log('Your Parties Pressed')}>
                <Text style={mainStyles.profilePageButtonText}>Your Parties</Text>
            </Pressable>

            <Pressable style={mainStyles.profilePageButton} onPress={() => console.log('Contact Us Pressed')}>
                <Text style={mainStyles.profilePageButtonText}>Contact Us</Text>
            </Pressable>

            <Pressable style={mainStyles.profilePageButton} onPress={() => navigation.navigate('Login')}>
                <Text style={[mainStyles.profilePageButtonText, { color: '#FF0000' }]}>Log out</Text>
            </Pressable>

            <ActionButton alignToBottom={true} onClick={() => navigation.navigate('Host', { userId: '1234' })} title='NEW PARTY' />
        </View>
    )
}

export default ProfileScreen;