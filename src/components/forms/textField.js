import React, { useState, useEffect } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { useSelector } from 'react-redux';

//textFieldWidth
//alignText

const InputField = ({ customMainContanier, customTextStyle, placeholderColor, placeholder, type, onChangeText }, props) => {
    const { theme } = useSelector(state => state.theme);
    const [value, setValue] = useState('')
    const [phoneNumber, setPhoneNumber] = useState(false)
    const {mainTextStyles} = styles(theme,props)

    let placeHolderText

    useEffect(() => {
        if (type == 'phone number') {
            setPhoneNumber(true)
        }
    }, [])

    switch (type) {
        case 'phone number':
            placeHolderText = '123 - 456 - 7890'
            break;
        default:
            placeHolderText = placeholder
            break;
    }

    checkPhoneNumber = (text) => {
        var cleaned = ('' + text).replace(/\D/g, '')
        var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
        if (match) {
            number = [match[2], ' - ', match[3], ' - ', match[4]].join('');
            return number
        }
        return text
    }

    return (
        <View>
            <TextInput
                style={{ ...mainTextStyles, ...customTextStyle, ...customMainContanier }}
                placeholder={placeHolderText}
                placeholderTextColor={placeholderColor ? placeholderColor : theme.Theme.defaultInputStyle.placeHolderColor}
                onChangeText={text => {
                    if (phoneNumber) {
                        let number = checkPhoneNumber(text)
                        setValue(number)
                        onChangeText(number);
                    } else {
                        setValue(text)
                        onChangeText(text);
                    }
                }}
                textContentType={phoneNumber ? 'telephoneNumber' : 'none'}
                dataDetectorTypes={phoneNumber ? 'phoneNumber' : 'all'}
                keyboardType={phoneNumber ? 'phone-pad' : 'default'}
                value={value}
            />
        </View>
    )
}

const styles = (theme,props) => StyleSheet.create({
    mainTextStyles: {
        ...theme.Theme.defaultInputStyle.textStyle,
        textAlign: props.alignText ? props.alignText : 'center',
        color: theme.Theme.defaultInputStyle.textColor,
        paddingHorizontal: 20,
        borderColor: theme.Theme.defaultInputStyle.boderColor,
        borderWidth: 4,
        width: props.textFieldWidth ? props.textFieldWidth:'100%',
        borderRadius: 100,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 9,
        marginBottom: 9
    }
})

export default InputField