import React from 'react'
import { View, TouchableOpacity, Text, Platform, ImageBackground, ActivityIndicator, StyleSheet, Dimensions } from 'react-native'
import { useSelector } from 'react-redux';
import { Image } from 'react-native-elements';
import { images } from'../../constants';

const { height, width } = Dimensions.get('window')

const DocumentScanner = () => {
    const {theme} = useSelector(state => state.theme)
    const {titleStyles, mainContainer, imageBackgroundStyles, innerCardContainer, imageStyles, cardTitle} = styles(theme)


      return (
        <View style={mainContainer}>
            <Text style={titleStyles}>Scan a picture of your vet receipt</Text>
        <TouchableOpacity>
            <ImageBackground resizeMode='stretch' source={images.doucumentScannerOutline} style={imageBackgroundStyles}>
          <View style={innerCardContainer}>
                                <Image
                                        source={images.doucumentScanner}
                                        style={imageStyles}
                                        PlaceholderContent={<ActivityIndicator />}
                                />
                                <Text style={cardTitle}>Align receipt with the border lines</Text>
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
        marginBottom: 53, 
        marginTop: 0
    },
    imageBackgroundStyles: {
        height: height * 0.4,
        width: 248.63
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
        ...props.Theme.cardTitle,
        paddingHorizontal: 68,
        textAlign: 'center'
    }
})

export default DocumentScanner