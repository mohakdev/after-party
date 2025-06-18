import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

import ProfileButton from '../components/ProfileButton';
import SearchBar from '../components/SearchBar';
import homeStyle from '../styles/homeStyles';
import PartyProfile from '../components/PartyProfile';
import mainStyles from '../styles/mainStyles';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: NavigationProps) => {
    return (
        <View style={mainStyles.screen}>
            <View style={homeStyle.header}>
                <View>
                    <Text style={homeStyle.headerText}>Find Events Near</Text>
                    <Text style={homeStyle.cityText}>Jaipur, India</Text>
                </View>
                <ProfileButton />
            </View>
            <SearchBar />
            <Text style={homeStyle.headingText}>Popular Now</Text>
            <PartyProfile party_name='Party All Night' date_time={new Date()}
                image={require("../assets/PartyTemp1.png")}
                onClick={() => navigation.navigate("Party", { partyId: '123' })} />
        </View>
    )
}

export default Home;