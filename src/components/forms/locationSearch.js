import React, { useState, useEffect } from 'react'
import { StyleSheet, TextInput, View, Text, Input, Dimensions } from 'react-native'
import { useSelector } from 'react-redux';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

//textFieldWidth
//alignText
//boderColor
//textColor
const {width} = Dimensions.get('window');
const locationSearch = (props) => {
    const { theme } = useSelector(state => state.theme);
    const [place, setPlace] = useState('')
    return (


            <GooglePlacesAutocomplete
                placeholder='City'
                returnKeyType={'default'}
                fetchDetails={true}
                styles={{
                    container: {
                        flex: 1,
                      },
                    textInputContainer: {
                        backgroundColor: 'transparent',
                        width:width*0.51,
                        justifyContent:'center',
                        borderColor:'#ffffff'
                        
                    },
                    listView:{
                        width:width*0.51,
                    },
                    textInput: {
                        height: 38,
                        color: '#ffffff',
                        fontSize: 17,
                        lineHeight:21,
                        borderRadius:20,
                        fontFamily:'SourceSansPro-Regular',
                        width:width*0.51,
                        textAlign:'center',
                        backgroundColor:'transparent',
                        borderColor:'#ffffff',
                        borderWidth:2,
                        placeholderTextColor:'#ffffff'
                    },
                    predefinedPlacesDescription: {
                        color: '#ffffff',
                    },
                }}
                requestUrl={{
                    useOnPlatform: 'all', // or "all"
                    url:
                        'https://maps.googleapis.com/maps/api', // or any proxy server that hits https://maps.googleapis.com/maps/api
                }}
                onPress={(data, details) => setPlace(data.structured_formatting.main_text)} //console.log(data.structured_formatting.main_text)
                textInputProps={{
                    InputComp: Input,
                    leftIcon: { type: 'font-awesome', name: 'chevron-left' },
                    errorStyle: { color: 'red' },
                }}
                query={{
                    key: 'AIzaSyDcMSiOclTFjkIeT1SYb7K3whev-qHm7nM',
                    language: 'en',
                }}
                onFail={error => console.error(error)}
            />
    )
}

const styles = (theme, props) => StyleSheet.create({

})

export default locationSearch;