import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { useSelector } from 'react-redux';

const InputField = ({ customMainContanier,customTextStyle, placeholderColor, placeholder }, props) => {
    const { theme } = useSelector(state => state.theme);

    return (
        <View style={{...styles(theme).mainContanier,...customMainContanier}}>
            <TextInput
                style={{...styles(theme).mainTextStyles,...customTextStyle}}
                placeholder={placeholder}
                placeholderTextColor={placeholderColor ?placeholderColor :theme.Theme.defaultInputStyle.placeHolderColor}
                {...props}
            />
        </View>
    )
}

const styles =(theme) => StyleSheet.create({
    mainContanier: {
        borderColor: theme.Theme.defaultInputStyle.boderColor,
        borderWidth: 4,
        width: '100%',
        borderRadius: 100,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop:9,
        marginBottom:9
    },
    mainTextStyles: {
        ...theme.Theme.defaultInputStyle.textStyle,
        textAlign: 'center',
        color: theme.Theme.defaultInputStyle.textColor,
        paddingHorizontal:20
    }
})

export default InputField