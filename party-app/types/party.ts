import { ImageSourcePropType } from "react-native";

interface Party {
    party_id: Number,
    name: string,
    date_time: Date,
    address: string,
    vibe: string,
    host_id: string,
    image: ImageSourcePropType,
}

export const PartyOne: Party = {
    name: 'Party All Night',
    party_id: 1,
    image: require('../assets/PartyTemp1.png'),
    date_time: new Date(),
    address: 'Dior, Parivahan Marg, C Scheme, Hathroi',
    vibe: 'Nights come and go but party nights like this are only once in a lifetime',
    host_id: 'Vicky Sharma, 18M',
}
export const PartyTwo: Party = {
    name: 'Disco Party',
    party_id: 2,
    image: require('../assets/PartyTemp2.png'),
    date_time: new Date(),
    address: 'Rosado, 11th Floor, Mall Of Jaipur, Kuber Complex, Vaishali Nagar',
    vibe: 'Just dancing and disco beats all night long.',
    host_id: 'Abhimanyu Rathore, 18M',
}

export default Party;