import { View, Text } from 'react-native'
import React from 'react'
import { whiteColor } from '../styles/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import mainStyles from '../styles/mainStyles';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Party'>;

const PartyScreen = ({ navigation, route }: NavigationProps) => {
    return (
        <View style={mainStyles.screen}>
            <Text style={{ color: whiteColor }}
                onPress={() => navigation.navigate("Home")}>Party Screen</Text>
            <Text>{route.params.partyId}</Text>
        </View>
    )
}

export default PartyScreen;