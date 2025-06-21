import { View, Text } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider';
import TextRow from './TextRow';
import { accentColor } from '../styles/colors';
import orderStyle from '../styles/orderStyles';

interface SelectQuantityProps {
    quantity: number;
    setQuantity: (value: number) => void;
}

const SelectQuantity = (props: SelectQuantityProps) => {
    return (
        <View>
            <Text style={orderStyle.subHeader}>Select Quantity</Text>
            <Slider
                style={{ width: '95%', minHeight: 40 }}
                minimumValue={1}
                maximumValue={8}
                step={1}
                minimumTrackTintColor={accentColor}
                maximumTrackTintColor="#637218"
                thumbTintColor={accentColor}
                value={props.quantity}
                onValueChange={(value) => props.setQuantity(value)}
            />
            <TextRow label='Tickets' value={props.quantity.toString()} valueColor={accentColor} />
        </View>
    )
}

export default SelectQuantity;