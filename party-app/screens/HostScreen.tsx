import { View, Text, Image, Pressable, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import mainStyles from '../styles/mainStyles';
import homeStyle from '../styles/homeStyles';
import { whiteColor } from '../styles/colors';
import ActionButton from '../components/ActionButton';
import loginStyle from '../styles/loginStyles';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Host'>;

const HostScreen = ({ navigation }: NavigationProps) => {
    const [partyName, setPartyName] = React.useState("Name");
    const [vibe, setVibe] = React.useState("Vibe");
    const [tkPrice, setTkPrice] = React.useState("Price");
    const [address, setAddress] = React.useState("Address");


    return (
        <View style={mainStyles.screen}>
            <Image style={{ resizeMode: 'contain', width: '90%', alignSelf: 'center' }} source={require('../assets/uploadPhoto.png')} />
            <TextInput style={loginStyle.textInput} value={partyName} onChangeText={(text) => setPartyName(text)} />
            <TextInput style={loginStyle.textInput} value={vibe} onChangeText={(text) => setVibe(text)} />
            <TextInput style={loginStyle.textInput} value={tkPrice} onChangeText={(text) => setTkPrice(text)} />
            <TextInput style={loginStyle.textInput} value={address} onChangeText={(text) => setAddress(text)} />


            <ActionButton alignToBottom={true} onClick={() => navigation.navigate('Home')} title='HOST PARTY' />
        </View>
    )
}

export default HostScreen;