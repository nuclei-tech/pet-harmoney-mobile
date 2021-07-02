import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Button } from '../../components'
import { Rating, AirbnbRating } from 'react-native-elements';

// Connect redux store.
import { useSelector } from 'react-redux';

const ShoppingCardList = (props) => {
    const { theme } = useSelector(state => state.theme);
    const {
        data,
        customImageContanier,
        customDiscriptionContanier,
        customOtherContanier,
        customMyCardListContanier,
        customDescription,
        customRatingContent,
        customTotal,
        customRating,
        customButtonContanier,
        customButtonTextStyle
    } = props

    const {
        description,
        ratingContent,
        flexContain,
        rating,
        total,
        flexView,
        myCardListContanier,
        imageContanier,
        discriptionContanier,
        otherContanier,
        buttonContanier,
        buttonTextStyle
    } = styles(theme)

    return (
        <View style={{ ...myCardListContanier, ...customMyCardListContanier }}>
            <View style={{ ...imageContanier, ...customImageContanier }}>
                <Image source={data.image} resizeMode={'contain'} />
            </View>
            <View style={{ ...discriptionContanier, ...customDiscriptionContanier }}>
                <Text style={{ ...description, ...customDescription }}>{data.description}</Text>
                <Text style={{ ...total, ...customTotal }}>${data.price}</Text>

                <View style={{...ratingContent,...customRatingContent}}>
                    <View style={flexContain}>
                        <Rating
                            imageSize={14}
                        />
                    </View>
                    <View style={flexView}>
                        <Text style={{ ...rating, ...customRating }}>64 Rating</Text>
                    </View>
                </View>
            </View>
            <View style={{ ...otherContanier, ...customOtherContanier }}>
                <Button buttonType={'small'} customTextStyle={{...buttonTextStyle,...customButtonTextStyle}} buttonContainStyle={{...buttonContanier,...customButtonContanier}} title={'Add to cart'} />
            </View>
        </View>
    )
}

const styles = (theme) => StyleSheet.create({
    flexView:{
        flex:1,paddingLeft:9
    },
    flexContain:{
        flex:1
    },
    buttonContanier: {
        backgroundColor: theme.Theme.shppoingListStyles.buttonBackGroundColor,
        borderWidth: 0,
        marginBottom: 0
    },
    buttonTextStyle: {
        color: theme.Theme.shppoingListStyles.buttonTextColor,
        lineHeight: 11
    },
    myCardListContanier: {
        flex: 15,
        flexDirection: 'row',
        paddingTop: 16,
        paddingBottom: 27,
        borderBottomColor: theme.Theme.shppoingListStyles.borderBottomColor,
        borderBottomWidth: 0.5
    },
    ratingContent:{
        flex: 1, 
        flexDirection: 'row', 
        marginTop: 6, 
        flexWrap: 'nowrap',
        alignItems:'center' 
    },
    imageContanier: {
        flex: 4,
        alignItems: 'center'
    },
    discriptionContanier: {
        flex: 7,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    otherContanier: {
        flex: 4,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    description: {
        ...theme.Theme.shppoingListStyles.description
    },
    subDiscription: {
        ...theme.Theme.shppoingListStyles.subDiscription,
        marginTop: 2
    },
    rating: {
        ...theme.Theme.shppoingListStyles.rating,
        marginTop: 3
    },
    change: {
        ...theme.Theme.shppoingListStyles.change,
        lineHeight: 11,
    },
    total: {
        ...theme.Theme.shppoingListStyles.total,
        marginTop:4
    }

})

export default ShoppingCardList