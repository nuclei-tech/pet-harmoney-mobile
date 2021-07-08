import React, { useEffect } from 'react'
import { View, TouchableOpacity, Text, Platform, ImageBackground, ActivityIndicator, StyleSheet, Dimensions } from 'react-native'
import { CardIOModule, CardIOUtilities } from 'react-native-awesome-card-io'
import { useSelector } from 'react-redux';
import { Image } from 'react-native-elements';
import { images } from'../../constants';

const CreditCardScanner = ({middleImage,customTitleStyle}) => {
    const {theme} = useSelector(state => state.theme)
    const {titleStyles, mainContainer, imageBackgroundStyles, innerCardContainer, imageStyles, cardTitle} = styles(theme)

    useEffect(() => {
        if (Platform.OS === 'ios') {
            CardIOUtilities.preload()
          }
    },[])

    const scanCard = () => {
        CardIOModule.scanCard({
            hideCardIOLogo: true,
            suppressManualEntry: true,
            requireCardholderName: true
        })
          .then(card => {
            // the scanned card
            // console.warn('cardDetails', card);
          })
          .catch((err) => {
            // the user cancelled
            // console.warn('cardDetailsERROR', err);
          })
      }

      return (
        <View style={mainContainer}>
            <Text style={{...titleStyles,...customTitleStyle}}>Add a payment method</Text>
        <TouchableOpacity onPress={scanCard}>
            <ImageBackground source={images.creditCardOutline} resizeMode={'stretch'} style={imageBackgroundStyles}>
          <View style={innerCardContainer}>
                                <Image
                                        source={middleImage}
                                        style={imageStyles}
                                        PlaceholderContent={<ActivityIndicator />}
                                />
                                <Text style={cardTitle}>Scan your credit card</Text>
          </View>
            </ImageBackground>
        </TouchableOpacity>
      </View>
      )

}

const styles = (props) => StyleSheet.create({
    mainContainer: { 
        flex: 1, 
        alignItems: 'center',
        marginBottom:45
    },
    titleStyles: {
        // ...props.Theme.titleStyles,
        paddingTop:12.5,
        paddingBottom:12.5,
        marginBottom: 17
    },
    imageBackgroundStyles: {
        width: Dimensions.get('window').width - 60, 
        height:( Dimensions.get('window').width)/2
    },
    innerCardContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    imageStyles: {
        width: 42, 
        height: 34.12, 
        marginBottom: 10
    },
    cardTitle: {
        ...props.Theme.cardTitle
    }
})

export default CreditCardScanner