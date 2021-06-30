import React from 'react'
import { Input } from 'react-native-elements';
import {StyleSheet} from 'react-native'
import {colors, size} from '../../theme'

const InputField = ({inputBackgroundColor, borderColor, inputColor, placeholderColor, placeholder, inputTextAlign}, props) => {
    return (
        <Input
            placeholder={placeholder}
            placeholderTextColor={placeholderColor}
            inputContainerStyle={[styles.inputContainer, {backgroundColor: inputBackgroundColor,borderColor: borderColor}]}
            inputStyle={[styles.input, { color: inputColor, textAlign: inputTextAlign,}]}
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 5,
        borderBottomWidth: 5,
        borderBottomRightRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25, 
        borderTopLeftRadius: 25,
       },
       input: {
        paddingHorizontal: 25,
        paddingVertical: 10,
        fontSize: size.FONT_SIZES.BUTTON,
        fontFamily: 'Source Sans Pro Bold',
       }
})

export default InputField