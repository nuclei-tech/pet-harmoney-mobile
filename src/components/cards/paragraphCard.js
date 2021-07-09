import React from 'react';
import { StyleSheet, Text, ActivityIndicator, View } from 'react-native';
import { Image } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { images } from '../../constants'

const ParagrapghCard = (props) => {
    const { theme } = useSelector(state => state.theme)
    const { 
        customCardContainer,
        title,
        imageExists,
        children } = props
    const { cardContainer, cardTitle, image, imageContainer } = styles(theme, props)

    return (
        <View style={{...cardContainer,...customCardContainer}}>
            {title && <Text style={[cardTitle]}>{title}</Text>}
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

const styles = (theme,props) => StyleSheet.create({
    cardContainer: {
        flex: 1,
        borderRadius: 20,
        borderWidth: 3,
        paddingLeft: 34,
        paddingRight: 34,
        paddingTop: 35,
        paddingBottom: 35,
        width: '100%',
        maxHeight: 414,
        backgroundColor: props.cardBackgroundColor, 
        borderColor: props.cardBorderColor
    },
    cardTitle: {
        marginBottom: 12,
        ...theme.Theme.defaultParagraphCardTitleStyles,
        textAlign: props.titleAlign, 
        color: props.titleColor
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