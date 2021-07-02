import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

// Connect redux store.
import { useSelector } from 'react-redux';

const SubscriptionCard = (props) => {
    const { theme } = useSelector(state => state.theme);

    const { subCardContanier, mainCardContanier, mainTextStyle, contentTitleStyle, leftContentStyle, rightTopStyle, rightBottomStyle, flexMainCard, flexSubMain,flexSubTopMain } = styles(theme)
    const { customSubCardContanier, title, customMainCardContanier, contentTitle, customMainTextStyle, customContentTitleStyle, customLeftContentStyle, leftContent, customRightTopStyle, customBottomTopStyle, rightTopContent, rightBottomContent, customFlexMainCard, customFlexSubMain,customFlexTopSubMain } = props

    return (
        <View style={{ ...mainCardContanier, ...customMainCardContanier }}>
            <Text style={{ ...mainTextStyle, ...customMainTextStyle }}>{title}</Text>
            <View style={{ ...subCardContanier, ...customSubCardContanier }}>
                <Text style={{ ...contentTitleStyle, ...customContentTitleStyle }}>{contentTitle}</Text>
                <View style={{ ...flexMainCard, ...customFlexMainCard }}>
                    <View style={{ ...flexSubTopMain, ...customFlexTopSubMain }}>
                        <Text style={{ ...leftContentStyle, ...customLeftContentStyle }}>{leftContent}</Text>
                    </View>

                    <View style={{ ...flexSubMain, ...customFlexSubMain }}>
                        <Text style={{ ...rightTopStyle, ...customRightTopStyle }}>{rightTopContent}</Text>
                        <Text style={{ ...rightBottomStyle, ...customBottomTopStyle }}>{rightBottomContent}</Text>
                    </View>

                </View>
            </View>
        </View>
    )
}
const styles = (theme) => StyleSheet.create({
    subCardContanier: {
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: theme.Theme.subscriptionCard.borderColor,
        backgroundColor: theme.Theme.subscriptionCard.backgroundColor,
        padding: 22,
    },
    mainTextStyle: {
       ...theme.Theme.subscriptionCard.mainTextStyle,
        marginBottom: 10,
        marginTop: 10
    },
    contentTitleStyle: {
        ...theme.Theme.subscriptionCard.contentTitleStyle,
        marginBottom: 6
    },
    leftContentStyle: {
        ...theme.Theme.subscriptionCard.leftContentStyle,
        color: theme.Theme.subscriptionCard.fontColor,
    },
    rightTopStyle: {
        ...theme.Theme.subscriptionCard.rightTopStyle,
    },
    rightBottomStyle: {
        ...theme.Theme.subscriptionCard.rightBottomStyle,
    },
    flexMainCard: {
        flex: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    flexSubMain: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    flexSubTopMain:{
        flex: 5,
    }
})

export default SubscriptionCard