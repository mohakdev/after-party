import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import ActionButton from '../components/ActionButton';
import { loginOrRegister } from '../hooks/loginOrRegister';
import loginStyle from '../styles/loginStyles';
import mainStyles from '../styles/mainStyles';
import { greyColor } from '../styles/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation, route }: NavigationProps) => {
    const [isLogin, setLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={mainStyles.screen}>
            <View>
                <Text style={loginStyle.heading}>Hey</Text>
                <Text style={loginStyle.heading}>Ready for</Text>
                <Text style={loginStyle.heading}>Tonight</Text>
            </View>
            <View style={loginStyle.box}>
                <Text style={loginStyle.boxHeading}>{isLogin ? "Sign In" : "Sign Up"}</Text>
                <TextInput placeholderTextColor={greyColor} style={loginStyle.textInput} placeholder='Email' value={email} onChangeText={(text) => setEmail(text)} />
                <TextInput placeholderTextColor={greyColor} style={loginStyle.textInput} placeholder='Password' value={password} onChangeText={(text) => setPassword(text)} />
                <Pressable onPress={() => setLogin(!isLogin)}>
                    <Text style={loginStyle.boxLink}>{isLogin ? "Don't have an account? Register" : "Already have an account? Login"}</Text>
                </Pressable>
                <ActionButton title={isLogin ? "Login" : 'Register'} onClick={() => navigation.navigate('Home')} />
            </View>
        </View>
    )
}

export default LoginScreen;