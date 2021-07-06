import React, { useState, useEffect } from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'
import { useSelector } from 'react-redux';

//textFieldWidth
//alignText

const InputField = ({ customMainContanier, customTextStyle, placeholderColor, placeholder, type, onChangeText, required, validator, errorMessage, requireMessage, onValidatorExecuted, customErrorContain, customErrorText }, props) => {
    const { theme } = useSelector(state => state.theme);
    const [values, setValue] = useState('')
    const [phoneNumber, setPhoneNumber] = useState(false)
    const [errordMessage, setErrordMessage] = useState();
    const [isvalid, setValid] = useState(true);
    const { mainTextStyles, errorContain, errorText,mainTextStylesPlaceHolder } = styles(theme, props)

    let placeHolderText

    useEffect(() => {
        if (type == 'phoneNumber') {
            setPhoneNumber(true)
        }
    }, [])

    let customvalidators = {
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        phone: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
    };

    const Validation = (text) => {
        const validateRes = new RegExp(customvalidators[validator] || validator);
        let value = text
        if (value) {
            setValid(validateRes.test(value));
            setErrordMessage(errorMessage);
            onValidatorExecuted && onValidatorExecuted(validateRes.test(value));
        } else if (required) {
            setValid(false);
            setErrordMessage(requireMessage ? requireMessage : 'required');
            onValidatorExecuted && onValidatorExecuted(validateRes.test(value));
        }
    };


    switch (type) {
        case 'phoneNumber':
            placeHolderText = '123 - 456 - 7890'
            break;
        case 'otp':
            placeHolderText = '.  .  .  .  .  .  .  .  .  .'
            break;
        default:
            placeHolderText = placeholder
            break;
    }

    checkPhoneNumber = (text) => {
        var cleaned = ('' + text).replace(/\D/g, '')
        var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
        if (match) {
            let number = [match[2], ' - ', match[3], ' - ', match[4]].join('');
            return number
        }
        return text
    }

    return (
        <View>
            <TextInput
                style={type == 'otp' && values == '' ? { ...mainTextStylesPlaceHolder, ...customTextStyle, ...customMainContanier }:{ ...mainTextStyles, ...customTextStyle, ...customMainContanier }}
                placeholder={placeHolderText}
                placeholderTextColor={placeholderColor ? placeholderColor : theme.Theme.defaultInputStyle.placeHolderColor}
                onChangeText={text => {
                    if (phoneNumber) {
                        let number = checkPhoneNumber(text)
                        setValue(number)
                        Validation(number);
                        onChangeText(number);
                    } else {
                        setValue(text)
                        onChangeText(text);
                        Validation(text);
                    }
                }}
                textContentType={phoneNumber ? 'telephoneNumber' : 'none'}
                dataDetectorTypes={phoneNumber ? 'phoneNumber' : 'all'}
                keyboardType={phoneNumber ? 'phone-pad' : 'default'}
                onEndEditing={() => {
                    Validation(values);
                }}
                value={values}
            />
            {!isvalid ? (
                <View style={{ ...errorContain, ...customErrorContain }}>
                    <Text style={{ ...errorText, ...customErrorText }}>
                        {errordMessage}
                    </Text>
                </View>
            ) : null}
        </View>
    )
}

const styles = (theme, props) => StyleSheet.create({
    mainTextStyles: {
        ...theme.Theme.defaultInputStyle.textStyle,
        textAlign: props.alignText ? props.alignText : 'center',
        color: theme.Theme.defaultInputStyle.textColor,
        paddingHorizontal: 20,
        borderColor: theme.Theme.defaultInputStyle.boderColor,
        borderWidth: 4,
        width: '100%',
        borderRadius: 100,
        paddingTop: 8,
        paddingBottom:8,
        marginTop: 9,
        marginBottom: 9,
    },
    mainTextStylesPlaceHolder: {
        ...theme.Theme.defaultInputStyle.textStyleBold,
        textAlign: props.alignText ? props.alignText : 'center',
        color: theme.Theme.defaultInputStyle.textColor,
        paddingHorizontal: 20,
        borderColor: theme.Theme.defaultInputStyle.boderColor,
        borderWidth: 4,
        width: '100%',
        borderRadius: 100,
        paddingTop:4,
        paddingBottom:12,
        marginTop: 9,
        marginBottom: 9,
    },
    errorContain: {
        flex: 1,
        alignItems: 'center',
        
    },
    errorText: {
        ...theme.Theme.defaultInputStyle.textStyleError,
        color: theme.Theme.colors.RED
    }
})

export default InputField