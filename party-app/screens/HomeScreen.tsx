import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

import ProfileButton from '../components/ProfileButton';
import SearchBar from '../components/SearchBar';
import homeStyle from '../styles/homeStyles';
import PartyProfile from '../components/PartyProfile';
import mainStyles from '../styles/mainStyles';
import Party, { PartyOne, PartyTwo } from '../types/party';
import { getCity } from '../hooks/getCity';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: NavigationProps) => {
    const city = getCity();
    return (
        <View style={mainStyles.screen}>
            <View style={homeStyle.header}>
                <View>
                    <Text style={homeStyle.headerText}>Find Events Near</Text>
                    <Text style={homeStyle.cityText}>{city}, India</Text>
                </View>
                <ProfileButton onClick={() => navigation.navigate("Profile")} />
            </View>
            <SearchBar />
            <Text style={homeStyle.headingText}>Popular Now</Text>
            <PartyProfile party_name={PartyOne.name} date_time={PartyOne.date_time} image={PartyOne.image}
                onClick={() => navigation.navigate("Party", { party: PartyOne })} />
            <PartyProfile party_name={PartyTwo.name} date_time={PartyTwo.date_time} image={PartyTwo.image}
                onClick={() => navigation.navigate("Party", { party: PartyTwo })} />
        </View>
    )
}

export default HomeScreen;