import React from 'react'
import {StyleSheet, View, Text, SafeAreaView, StatusBar} from 'react-native'
import { useSelector } from 'react-redux';
import {Header} from '../../components'

const SecondaryTitleHeader = ({primaryTitle, secondaryTitle, backgroundCustomColor, withDefultHeader}) => {
    const {theme} = useSelector(state => state.theme)
    const {mainContainer, mainText, secondaryText, mainContainerWithHeader} = styles(theme)
    const backgroundColor = {backgroundColor: backgroundCustomColor}

    return (
        <>
        {withDefultHeader ? <View style={[mainContainerWithHeader, backgroundColor]}>
                <Header title={'PET HARMONY'}/>
        </View>
        :
        <View style={[mainContainer, backgroundColor]}>
            <SafeAreaView>
                <Text style={mainText}>{primaryTitle}</Text>
                <Text style={secondaryText}>{secondaryTitle}</Text>
            </SafeAreaView>
        </View>}
        </>
    )
}

const styles = (props) => StyleSheet.create({
    mainContainerWithHeader: {
        // position: 'absolute',
        zIndex: 2,
        paddingHorizontal: 30,
        shadowColor: props.Theme.colors.BLACK,
        shadowOpacity: 0.18,
        shadowRadius: 10,
        shadowOffset: {
        height: 2,
        width: 0
        },
            elevation: 5,
            paddingTop: 42.5,
            paddingBottom: 32.5,
            width: '100%',
            borderWidth: 0
    },
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
            borderWidth: 4
            
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