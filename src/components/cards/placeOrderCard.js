import React from 'react'
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native'

// Connect redux store.
import { useSelector } from 'react-redux';
import { InputField, Button } from '../../components'
import { colors } from '../../theme';
const PlaceOrderCard = ({subtotal, shipping, total }) => {
    const { theme } = useSelector(state => state.theme);

    const { width, height } = Dimensions.get('window');
    const {
        placeOrderCardContanier
    } = styles(theme)

    return (
        <View style={{ ...placeOrderCardContanier }}>
            <View flex={0.75} style={{ alignItems: 'flex-end', marginRight: width * 0.072 }}>
                <InputField
                    customMainContanier={{ backgroundColor: '#ffffff', borderColor: theme.Theme.colors.PLACEHOLDER_GRAY, borderWidth: 1 }}
                    placeholderColor={theme.Theme.colors.PLACEHOLDER_GRAY}
                    customTextStyle={{ fontSize: 12, paddingVertical: 0, color: theme.Theme.colors.PLACEHOLDER_GRAY }}
                    placeholder={'Apply Coupon Code'}
                />
            </View>
            <View flex={0.75}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                    <Text style={{ fontFamily: 'SourceSansPro-Bold', alignSelf: 'flex-end', fontSize: 13, lineHeight: 16 }} flex={0.5}>Subtotal</Text>
                    <Text style={{ fontFamily: 'SourceSansPro-Light', fontSize: 24, lineHeight: 30 }} flex={0.5}>{subtotal}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                    <Text style={{ fontFamily: 'SourceSansPro-Bold', alignSelf: 'flex-end', fontSize: 13, lineHeight: 16 }} flex={0.5}>Shiping</Text>
                    <Text style={{ fontFamily: 'SourceSansPro-Light', fontSize: 24, lineHeight: 30 }} flex={0.5}>{shipping}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                    <Text style={{ fontFamily: 'SourceSansPro-Bold', alignSelf: 'flex-end', fontSize: 13, lineHeight: 16 }} flex={0.5}>Total</Text>
                    <Text style={{ fontFamily: 'SourceSansPro-Light', fontSize: 24, lineHeight: 30 }} flex={0.5}>{total}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', marginTop:height*0.02 }} >
                    <Button title="Place Order" buttonType={'small'} color={theme.Theme.colors.BLUE} customTextStyle={{ color: colors.WHITE, fontSize: 14, lineHeight: 18, }} />
                    <Text style={{ fontFamily: 'SourceSansPro-Light', fontSize: 9, lineHeight: 11, textAlign:'center' }} flex={0.5}>Use card ending in 7890</Text>
                </View>
            </View>

        </View>
    )
}

const styles = (theme) => StyleSheet.create({
    placeOrderCardContanier: {
        flex: 2,
        flexDirection: 'row',
        paddingLeft: 25,
        justifyContent: 'space-between'

    },


})

export default PlaceOrderCard