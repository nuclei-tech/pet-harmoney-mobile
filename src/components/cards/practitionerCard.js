import { he } from 'date-fns/locale';
import React from 'react';
import { StyleSheet, Text, ActivityIndicator, View, Dimensions } from 'react-native';
import { Image } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { images } from '../../constants'
const { width, height } = Dimensions.get('window');
const practitionerCard = (props) => {
    const { theme } = useSelector(state => state.theme)
    const {
        customCardContainer,
        title,
        imageExists,
        children, item } = props
    const { cardContainer, cardTitle, image, imageContainer, textContainer, nameStyle, clinicStyle, locationStyle } = styles(theme, props)

    return (
        <View style={{ ...cardContainer, ...customCardContainer }}>
            <View flex={1.5} style={imageContainer}>
                <Image source={images.practitioner} style={image} />
            </View>
            <View flex={3} style={textContainer}>
                <Text flex={1} style={nameStyle}>{item.name}</Text>
                <Text flex={1}  style={clinicStyle}>{item.clinic}</Text>
                <Text flex={1}  style={locationStyle}>{item.location}</Text>
            </View>
        </View>
    )
}

const styles = (theme, props) => StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: width*0.04,
        paddingVertical: height * 0.03,
        backgroundColor: theme.Theme.colors.WHITE,
        borderRadius: 20,
        marginVertical: height * 0.015,
        minHeight: height*0.16,
        width: width*0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    image: {
        width: height*0.07,
        height: height*0.07,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent:'center',
        paddingRight: 16,
    },
    textContainer: {
        paddingRight: 16,
        justifyContent:'center',
        
    },
    nameStyle: {
        fontFamily: 'SourceSansPro-Bold',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 18,
        color: theme.Theme.colors.PURPLE
    },
    clinicStyle: {
        fontFamily: 'SourceSansPro-Bold',
        fontWeight: '300',
        fontSize: 12,
        lineHeight: 15,
        color: '#808080',
        // paddingVertical:4
    },
    locationStyle: {
        fontFamily: 'SourceSansPro-Light',
        fontWeight: '300',
        fontSize: 12,
        lineHeight: 15,
        color: '#808080',
        paddingTop:6
    }
})

export default practitionerCard;