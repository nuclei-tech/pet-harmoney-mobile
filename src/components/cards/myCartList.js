import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

// Connect redux store.
import { useSelector } from 'react-redux';

const MyCardList = (props) => {

    const { theme } = useSelector(state => state.theme);

    const {
        data,
        customImageContanier,
        customDiscriptionContanier,
        customOtherContanier,
        customMyCardListContanier,
        customDescription,
        customSubDiscription,
        customOffer,
        customChange,
        customTotal } = props

    const {
        description,
        subDiscription,
        offer,
        change,
        total,
        myCardListContanier,
        imageContanier,
        discriptionContanier,
        otherContanier,
    } = styles(theme)

    return (
        <View style={{ ...myCardListContanier, ...customMyCardListContanier }}>
            <View style={{ ...imageContanier, ...customImageContanier }}>
                <Image source={data.image} resizeMode={'contain'} />
            </View>
            <View style={{ ...discriptionContanier, ...customDiscriptionContanier }}>
                <Text style={{ ...description, ...customDescription }}>{data.description}</Text>
                {data.offer ?
                    <Text style={{ ...offer, ...customOffer }}>{data.offer}</Text>
                    : null}
                <Text style={{ ...subDiscription, ...customSubDiscription }}>{data.subDiscription}</Text>
            </View>
            <View style={{ ...otherContanier, ...customOtherContanier }}>
                <Text style={{ ...change, ...customChange }}>Change</Text>
                <Text style={{ ...total, ...customTotal }}>${data.price}</Text>
            </View>
        </View>
    )
}

const styles = (theme) => StyleSheet.create({
    myCardListContanier: {
        flex: 15,
        flexDirection: 'row',
        paddingTop: 16,
        paddingBottom: 17,
        borderBottomColor: theme.Theme.cartListStyles.borderBottomColor,
        borderBottomWidth: 0.5
    },
    imageContanier: {
        flex: 4,
        alignItems: 'center'
    },
    discriptionContanier: {
        flex: 7,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    otherContanier: {
        flex: 4,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    description: {
        ...theme.Theme.cartListStyles.description
    },
    subDiscription: {
        ...theme.Theme.cartListStyles.subDiscription,
        marginTop: 5
    },
    offer: {
        ...theme.Theme.cartListStyles.offer,
        marginTop: 4,
    },
    change: {
        ...theme.Theme.cartListStyles.change,
        lineHeight: 11,
    },
    total: {
        ...theme.Theme.cartListStyles.total,
        marginTop: 3
    }

})

export default MyCardList