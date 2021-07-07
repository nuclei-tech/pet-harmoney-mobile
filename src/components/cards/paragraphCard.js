import React from 'react';
import { StyleSheet, Text, ActivityIndicator, View } from 'react-native';
import { Image } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { images } from '../../constants'

const ParagrapghCard = ({
    cardBorderColor, 
    cardBackgroundColor,
    containerPaddingTop,
    containerPaddingBottom,
    containerPaddingLeft,
    containerPaddingRight,
    cardWidth,
    cardMinHeight,
    cardTitleMarginBottom,
    titleColor,
    titleAlign, 
    title,
    imageExists,
    children,
    forHomeCards
}) => {
    const {theme} = useSelector(state => state.theme)
    const {cardContainer, cardTitle, image, imageContainer, titleHome, containerHome} = styles(theme)
    const cardViewStyles = {backgroundColor: cardBackgroundColor, borderColor: cardBorderColor, paddingTop: containerPaddingTop, paddingBottom: containerPaddingBottom, paddingLeft: containerPaddingLeft, paddingRight: containerPaddingRight, width: cardWidth, minHeight: cardMinHeight}
    const titleStyles = {textAlign: titleAlign, color: titleColor}

    return (
        <View style={[cardContainer, cardViewStyles, forHomeCards && containerHome]}>
            {title && <Text style={[cardTitle, titleStyles, forHomeCards && {...titleHome, marginBottom: cardTitleMarginBottom}]}>{title}</Text>}
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
        minHeight: 414, 
        marginBottom: 15
    },
    containerHome: { 
        borderRadius: 15, 
        borderWidth: 2
    },
    cardTitle: {
        marginBottom: 12, 
        ...props.Theme.defaultParagraphCardTitleStyles
    },
    titleHome: {
        ...props.Theme.defaultParagraphCardTitleHomeStyles
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