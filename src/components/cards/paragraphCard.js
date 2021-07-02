import React from 'react';
import { StyleSheet, Text, ActivityIndicator, View } from 'react-native';
import { Image } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { images } from '../../constants'

const ParagrapghCard = ({
    cardBorderColor, 
    cardBackgroundColor,
    titleColor,
    titleAlign, 
    title,
    imageExists,
    children
}) => {
    const {theme} = useSelector(state => state.theme)
    const {cardContainer, cardTitle, image, imageContainer} = styles(theme)

    return (
        <View style={[cardContainer, {backgroundColor: cardBackgroundColor, borderColor: cardBorderColor,}]}>
            {title && <Text style={[cardTitle, {textAlign: titleAlign, color: titleColor}]}>{title}</Text>}
                {children}
            {imageExists && <View style={imageContainer}>
                <Image
                    source={images.termsDownArrow}
                    style={image}
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
        ...props.Theme.defaultParagraphCardTitleStyles
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