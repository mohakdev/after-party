import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import mainStyles from '../styles/mainStyles';
import PartyProfile from '../components/PartyProfile';
import ActionButton from '../components/ActionButton';
import SelectQuantity from '../components/SelectQuantity';
import orderStyle from '../styles/orderStyles';
import TextRow from '../components/TextRow';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Order'>;

const OrderScreen = ({ navigation, route }: NavigationProps) => {
    const [quantity, setQuantity] = React.useState(1);

    let totalPrice = route.params.party.ticket_price * quantity;
    let taxes = 0.18 * totalPrice; // Assuming 18% tax
    useEffect(() => {
        totalPrice = route.params.party.ticket_price * quantity;
        taxes = 0.1 * totalPrice; // Assuming 18% tax
        console.log(`Total price updated: ₹${totalPrice}`);
    }, [quantity]);


    return (
        <View style={mainStyles.screen}>
            <Text style={orderStyle.header}>Order Details</Text>
            <PartyProfile party_name={route.params.party.name} date_time={route.params.party.date_time} image={route.params.party.image} onClick={() => console.log("Image was clicked!")} />
            <SelectQuantity quantity={quantity} setQuantity={setQuantity} />
            <Text style={[orderStyle.subHeader, { marginTop: 20, }]}>Order Summary</Text>
            <TextRow label='Item Total' value={'₹' + totalPrice.toString()} />
            <TextRow label='Subtotal' value={'₹' + totalPrice.toString()} />
            <TextRow label='Platform Fees' value='₹12' />
            <TextRow label='GST' value={'₹' + Math.round(taxes).toString()} />

            <ActionButton title='PROCEED TO PAY' onClick={() => console.log("Ticket was purchased!")} />
        </View>
    )
}

export default OrderScreen;