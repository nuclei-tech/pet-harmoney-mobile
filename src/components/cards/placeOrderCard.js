import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

// Connect redux store.
import { useSelector } from 'react-redux';
import { InputField } from '../../components'
const PlaceOrderCard = ({ data }) => {
    const { theme } = useSelector(state => state.theme);

    const {
        placeOrderCardContanier
    } = styles(theme)

    return (
        <View style={{ ...placeOrderCardContanier }}>
            <View flex={1} style={{alignItems:'flex-end'}}>
                <InputField
                    customMainContanier={{ backgroundColor: '#ffffff', borderColor: theme.Theme.colors.PLACEHOLDER_GRAY, borderWidth: 1}}
                    placeholderColor={theme.Theme.colors.PLACEHOLDER_GRAY}
                    customTextStyle={{fontSize:12, paddingVertical:0, color:theme.Theme.colors.PLACEHOLDER_GRAY}}
                    placeholder={'Apply Coupon Code'}
                />
            </View>
            <View flex={1}>
            </View>

        </View>
    )
}

const styles = (theme) => StyleSheet.create({
    placeOrderCardContanier: {
        flex: 15,
        flexDirection: 'row',
        paddingTop: 16,
        paddingBottom: 17,
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 0.5,
        backgroundColor:theme.Theme.colors.WHITE,
        paddingLeft:25
        
    },


})

export default PlaceOrderCard