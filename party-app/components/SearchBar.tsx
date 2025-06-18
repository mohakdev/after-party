import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import homeStyle from '../styles/homeStyles';
import { greyColor, whiteColor } from '../styles/colors';

const SearchBar = () => {
    const [searchVal, setSearchVal] = useState('');
    return (
        <View style={homeStyle.searchView}>
            <Image style={{ width: 30, height: 30 }} source={require('../assets/search.png')} />
            <TextInput style={homeStyle.searchText} placeholder='Search Parties' placeholderTextColor={greyColor}
                value={searchVal} onChangeText={(text) => setSearchVal(text)} />
        </View>
    )
}

export default SearchBar;