import React, { useEffect } from 'react'
import { View, TouchableOpacity, Text, Platform, ImageBackground, ActivityIndicator, StyleSheet } from 'react-native'
import { CardIOModule, CardIOUtilities } from 'react-native-awesome-card-io'
import { useSelector } from 'react-redux';
import { Image } from 'react-native-elements';
import { images } from'../../constants';

const CreditCardScanner = ({middleImage}) => {
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
            <Text style={titleStyles}>Add a payment method</Text>
        <TouchableOpacity onPress={scanCard}>
            <ImageBackground source={images.creditCardOutline} style={imageBackgroundStyles}>
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
        alignItems: 'center'
    },
    titleStyles: {
        ...props.Theme.titleStyles,
        marginBottom: 34
    },
    imageBackgroundStyles: {
        width: 285, 
        height: 168.27
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