import React from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux';

const SecondaryTitleHeader = () => {
    const { theme } = useSelector(state => state.theme)
    const { mainContainer, mainText, secondaryText } = styles(theme)

    return (
        <View style={mainContainer}>
            <SafeAreaView>
                <Text style={mainText}>Pet Harmony</Text>
                <Text style={secondaryText}>Practitioners</Text>
            </SafeAreaView>
        </View>
    )
}

const styles = (props) => StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: props.Theme.colors.BLACK,
        shadowOpacity: 0.18,
        shadowRadius: 10,
        shadowOffset: {
            height: 2,
            width: 0
        },
        elevation: 5,
        height: 120,
        width: '100%',
        backgroundColor: props.Theme.colors.BLUE,
        borderWidth: 0

    },
    mainText: {
        alignSelf: 'center',
        marginBottom: 3,
        ...props.Theme.secondaryTopStylesMainText
    },
    secondaryText: {
        alignSelf: 'center',
        ...props.Theme.secondaryTopStylesSecondaryText
    }
})

export default SecondaryTitleHeader