import { Text, ImageBackground, Pressable, ImageSourcePropType, View } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur';
import homeStyle from '../styles/homeStyles';

interface PartyProps {
    party_name: string,
    date_time: Date,
    image: ImageSourcePropType,
    onClick: () => void;
}

const PartyProfile = (props: PartyProps) => {

    function getTimeInString(): string {
        let time = '';
        let hours = props.date_time.getHours();
        let minutes = props.date_time.getMinutes();
        let meridian = 'AM';
        if (props.date_time.getHours() > 12) //Convert to PM 
        {
            hours -= 12;
            meridian = 'PM';
        }

        const hourString = hours < 10 ? '0' + hours.toString() : hours.toString();
        const minuteString = minutes < 10 ? '0' + minutes.toString() : minutes.toString();

        time = hourString + ' : ' + minuteString + ' ' + meridian;

        return time;
    }

    return (
        <View style={homeStyle.partyButtonStyle}>
            <Pressable onPress={props.onClick} style={{ height: '100%', width: '100%' }}>
                <ImageBackground source={props.image} style={homeStyle.partyImage}
                    resizeMode='cover'>
                    <BlurView experimentalBlurMethod='dimezisBlurView' intensity={5} tint='dark' style={{ paddingBottom: 6, paddingLeft: 8 }}>
                        <Text style={homeStyle.partyNameStyle}>{props.party_name}</Text>
                        <Text style={homeStyle.partyTimeStyle}>{getTimeInString()}</Text>
                    </BlurView>
                </ImageBackground>
            </Pressable>
        </View>
    )
}

export default PartyProfile;