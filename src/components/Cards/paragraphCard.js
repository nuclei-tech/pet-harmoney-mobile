import React from 'react';
import { StyleSheet, Text, ActivityIndicator, View } from 'react-native';
import { Card, Image } from 'react-native-elements';
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
    return (
        <Card containerStyle={[styles.cardContainer, {backgroundColor: cardBackgroundColor, borderColor: cardBorderColor,}]}>
            {title && <Card.Title style={[styles.cardTitle, {textAlign: titleAlign, color: titleColor}]}>{title}</Card.Title>}
            <Text style={[styles.paragraphText, {color: textColor}]}>
                {paragraph}
            </Text>
            {imageExists && <View style={styles.imageContainer}>
                <Image
                    source={images.termsDownArrow}
                    style={styles.image}
                    PlaceholderContent={<ActivityIndicator />}
                />
            </View>}
        </Card>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 20,
        borderWidth: 3,
        paddingLeft: 34, 
        paddingRight: 34, 
        paddingTop: 35, 
        paddingBottom: 35,
        maxWidth: 316,
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