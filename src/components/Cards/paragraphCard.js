import React from 'react';
import { StyleSheet, Text, ActivityIndicator, View } from 'react-native';
import { Card, Image } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { images } from '../../constants'

const ParagrapghCard = ({
    cardBorderColor, 
    cardBackgroundColor,
    titleColor,
    textColor,
    paragraph, 
    titleAlign, 
    title,
    imageExists
}) => {
    const {theme} = useSelector(state => state.theme)

    return (
        <View style={[styles(theme).cardContainer, {backgroundColor: cardBackgroundColor, borderColor: cardBorderColor,}]}>
            {title && <Text style={[styles(theme).cardTitle, {textAlign: titleAlign, color: titleColor}]}>{title}</Text>}
            <Text style={[styles(theme).paragraphText, {color: textColor}]}>
                {paragraph}
            </Text>
            {imageExists && <View style={styles(theme).imageContainer}>
                <Image
                    source={images.termsDownArrow}
                    style={styles(theme).image}
                    PlaceholderContent={<ActivityIndicator />}
                />
            </View>}
        </View>
    )
}

const styles = (props) => StyleSheet.create({
    cardContainer: {
        borderRadius: 20,
        borderWidth: 3,
        paddingLeft: 34, 
        paddingRight: 34, 
        paddingTop: 35, 
        paddingBottom: 35,
        width: '100%',
        minHeight: 414
    },
    cardTitle: {
        marginBottom: 12, 
        fontSize: 14,
        lineHeight: 18,
        fontFamily: 'Source Sans Pro',
        fontWeight: 'bold'
    },
    paragraphText: {
        fontSize: 14, 
        lineHeight: 18, 
        fontFamily: 'Source Sans Pro',
        fontWeight: '300',
    },
    image: {
        width: 22.8,
        height: 19,
    },
    imageContainer: {
        alignItems: 'center', 
        marginTop: 20
    }
})

export default ParagrapghCard