import React from 'react'
import {StyleSheet, View, Text, SafeAreaView} from 'react-native'
import { useSelector } from 'react-redux';

const SecondaryTitleHeader = ({primaryTitle, secondaryTitle, backgroundCustomColor}) => {
    const {theme} = useSelector(state => state.theme)
    const {mainContainer, mainText, secondaryText} = styles(theme)
    const backgroundColor = {backgroundColor: backgroundCustomColor}

    return (
        <View style={[mainContainer, backgroundColor]}>
            <SafeAreaView>
                <Text style={mainText}>{primaryTitle}</Text>
                <Text style={secondaryText}>{secondaryTitle}</Text>
            </SafeAreaView>
        </View>
    )
}

const styles = (props) => StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
         justifyContent:'center',
         shadowColor: props.Theme.colors.BLACK,
        shadowOpacity: 0.18,
        shadowRadius: 10,
        shadowOffset: {
        height: 2,
        width: 0
        },
            elevation: 5,
            paddingVertical: 42.5,
            width: '100%',
            borderWidth: 0
            
    },
    mainText: {
        alignSelf: 'center',
        marginBottom: 7,
        ...props.Theme.secondaryTopStylesMainText,
        textTransform: 'uppercase'
    },
    secondaryText: {
        alignSelf: 'center',
        ...props.Theme.secondaryTopStylesSecondaryText,
        textTransform: 'uppercase'
    }
})

export default SecondaryTitleHeader