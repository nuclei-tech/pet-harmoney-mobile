import React, { useState, useEffect } from 'react'
import { StyleSheet, TextInput, View, Text, Image, Platform } from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import { useSelector } from 'react-redux';
import {images} from '../../constants'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {format} from 'date-fns';
//textFieldWidth
//alignText
//boderColor
//textColor

const InputField = (props) => {
    const { theme } = useSelector(state => state.theme);
    const [values, setValue] = useState('')
    const [phoneNumber, setPhoneNumber] = useState(false)
    const [errordMessage, setErrordMessage] = useState();
    const [isvalid, setValid] = useState(true);
    const { mainTextStyles, errorContain, errorText,mainTextStylesPlaceHolder, imageExistTextStyles, imageExistContainer, imageExistArrow } = styles(theme, props)
    const { customMainContanier, customTextStyle, placeholderColor, placeholder, type, onChangeText, required, validator, errorMessage, requireMessage, onValidatorExecuted, customErrorContain, customErrorText, onTimePickerPress, TouchableAndroid } = props
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [pickedTime, setPickedTime] = useState('')

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
        const time = format(date, 'h:mm a')
    //   console.warn("A date has been picked: ", date);
      setPickedTime(time)
      hideDatePicker()
    };
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
           { 
           props.rightImageExist ?
           <View style={{ ...mainTextStyles, ...customTextStyle, ...customMainContanier, ...imageExistContainer}}>
            {
                Platform.OS === 'android' ?
                <TouchableAndroid onPress={showDatePicker} style={{flex: 1}}>
                        {console.warn('timeee', pickedTime)}
                        <TextInput
                            style={imageExistTextStyles}
                            placeholder={placeHolderText}
                            placeholderTextColor={placeholderColor}
                            onChangeText={text => setPickedTime(text)}
                            onTouchStart={()=>showDatePicker()}
                            showSoftInputOnFocus={false}
                            value={pickedTime}
                            editable={false}
                            color={theme.Theme.colors.WHITE}
                            {...props}
                        />
            </TouchableAndroid>
            :
            <TouchableOpacity onPress={showDatePicker} style={{flex: 1}}>

                        <TextInput
                            style={imageExistTextStyles}
                            placeholder={placeHolderText}
                            placeholderTextColor={placeholderColor}
                            onChangeText={text => setPickedTime(text)}
                            onTouchStart={()=>showDatePicker()}
                            showSoftInputOnFocus={false}
                            value={pickedTime}
                            editable={false}
                            color={theme.Theme.colors.WHITE}
                            {...props}
                        />
            </TouchableOpacity>
            }
            
            <TouchableOpacity style={{alignSelf: 'center'}} onPress={()=> console.warn('image pressed')}>

            <Image source={images.downArrow} style={imageExistArrow} />
            </TouchableOpacity>

        </View>
        :
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
                {...props}
            />
            }
            <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="time"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    display="spinner"
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
        color: props.textColor ? props.textColor : theme.Theme.defaultInputStyle.textColor,
        paddingHorizontal: 20,
        borderColor: props.boderColor ? props.boderColor :theme.Theme.defaultInputStyle.boderColor,
        borderWidth: 4,
        width: '100%',
        borderRadius: 100,
        paddingTop: 9.5,
        paddingBottom:9.5,
        marginTop: 9,
        marginBottom: 9,
        backgroundColor:props.backgroundColor ? props.backgroundColor:'transparent'
    },
    imageExistTextStyles: {
        ...theme.Theme.defaultInputStyle.textStyle,
        flex:1,
        textAlign: 'center',
        width: 160,
        paddingLeft: 10
    },
    mainTextStylesPlaceHolder: {
        ...theme.Theme.defaultInputStyle.textStyleBold,
        textAlign: props.alignText ? props.alignText : 'center',
        color: props.textColor ? props.textColor : theme.Theme.defaultInputStyle.textColor,
        paddingHorizontal: 20,
        borderColor: props.boderColor ? props.boderColor :theme.Theme.defaultInputStyle.boderColor,
        borderWidth: 4,
        width: '100%',
        borderRadius: 100,
        paddingTop:5.5,
        paddingBottom:13.5,
        marginTop: 9,
        marginBottom: 9,
        backgroundColor:props.backgroundColor ? props.backgroundColor:'transparent'
    },
    errorContain: {
        flex: 1,
        alignItems: 'center',
    },
    errorText: {
        ...theme.Theme.defaultInputStyle.textStyleError,
        color: theme.Theme.colors.RED
    }, 
    imageExistContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    imageExistArrow: {
        height: 16, 
        width: 19.2
    }
})

export default InputField