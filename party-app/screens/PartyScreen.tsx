import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import mainStyles from '../styles/mainStyles';
import ActionButton from '../components/ActionButton';
import partyStyle from '../styles/partyStyles';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Party'>;

const PartyScreen = ({ navigation, route }: NavigationProps) => {
    const orderParams = {
        userId: "123", // This should be replaced with actual user ID from context or state
        party: route.params.party,
    }
    return (
        <View style={mainStyles.screen}>
            <View style={partyStyle.imageView}>
                <ImageBackground blurRadius={1} style={partyStyle.blurView} resizeMode='cover' source={route.params.party.image} />
            </View>
            <Text style={partyStyle.header}>{route.params.party.name}</Text>

            <Text style={partyStyle.subHeader}>{route.params.party.date_time.toDateString()}</Text>
            <Text style={partyStyle.content}>{route.params.party.address}</Text>

            <Text style={partyStyle.subHeader}>Vibe</Text>
            <Text style={[partyStyle.content, { fontStyle: 'italic' }]}>“{route.params.party.vibe}”</Text>

            <Text style={partyStyle.subHeader}>Host</Text>
            <Text style={partyStyle.content}>{route.params.party.host_id}</Text>
            <ActionButton title='BUY TICKETS' onClick={() => navigation.navigate("Order", orderParams)} />
        </View>
    )
}

export default PartyScreen;