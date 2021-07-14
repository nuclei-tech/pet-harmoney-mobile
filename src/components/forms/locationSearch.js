import React, { useState, useEffect } from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'
import { useSelector } from 'react-redux';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

//textFieldWidth
//alignText
//boderColor
//textColor

const locationSearch = (props) => {
    const { theme } = useSelector(state => state.theme);

    return (
        <GooglePlacesAutocomplete
            placeholder='Search'
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
            }}
            query={{
                key: 'YOUR API KEY',
                language: 'en',
            }}
        />
    )
}

const styles = (theme, props) => StyleSheet.create({

})

export default locationSearch;