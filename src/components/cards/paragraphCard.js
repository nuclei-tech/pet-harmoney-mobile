import React from 'react';
import { StyleSheet, Text, ActivityIndicator, View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { images } from '../../constants'
import {navigate} from '../../navigation/navigation'

const ParagrapghCard = (props) => {
    const { theme } = useSelector(state => state.theme)
    const { 
        customCardContainer,
        customCardTitleStyles,
        title,
        imageExists,
        navigationScreen,
        children } = props
    const { cardContainer, cardTitle, image, imageContainer } = styles(theme, props)

    return (
        <View style={{...cardContainer,...customCardContainer}}>
           {navigationScreen ? 
           <TouchableOpacity>
            {title && <Text style={[cardTitle, customCardTitleStyles]}>{title}</Text>}
            {children}
            {imageExists && <View style={imageContainer}>
                <Image
                    source={images.termsDownArrow}
                    style={image}
                    PlaceholderContent={<ActivityIndicator />}
                />
            </View>}
            </TouchableOpacity>
            :
            <View>
            {title && <Text style={[cardTitle, customCardTitleStyles]}>{title}</Text>}
            {children}
            {imageExists && <View style={imageContainer}>
                <Image
                    source={images.termsDownArrow}
                    style={image}
                    PlaceholderContent={<ActivityIndicator />}
                />
            </View>}
            </View>
            }
        </View>
    )
}

const styles = (theme,props) => StyleSheet.create({
    cardContainer: {
        flex:1,
        borderRadius: 20,
        borderWidth: 3,
        paddingLeft: 34,
        paddingRight: 34,
        paddingTop: 35,
        paddingBottom: 35,
        width: '100%',
        backgroundColor: props.cardBackgroundColor, 
        borderColor: props.cardBorderColor
    },
    cardTitle: {
        marginBottom: 12,
        ...theme.Theme.defaultParagraphCardTitleStyles,
        textAlign: props.titleAlign, 
        color: props.titleColor,
        // fle
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