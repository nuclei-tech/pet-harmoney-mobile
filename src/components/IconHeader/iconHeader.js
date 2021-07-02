import React from 'react'
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native'
import { Image } from 'react-native-elements';
import { useSelector } from 'react-redux';

const IconHeader = ({
    containerMarginTop,
    containerMarginBottom,
    primaryImage,
    primaryTextFontSize,
    primaryImageWidth,
    primaryImageHeight,
    primaryTextLineHeight,
    mainTextColor, 
    mainText,
}) => {

    const imageStyles = {width: primaryImageWidth, height: primaryImageHeight}
    const {theme} = useSelector(state => state.theme)
    const {mainTextStyle, mainContainer} = styles(theme)
    const mainTitleStyles = {color: mainTextColor, fontSize: primaryTextFontSize, lineHeight: primaryTextLineHeight}
    const mainContainerStyles = {marginTop: containerMarginTop, marginBottom: containerMarginBottom}

    return (
       <View style={[mainContainer, mainContainerStyles]}>
            <Image
                    source={primaryImage}
                    style={imageStyles}
                    PlaceholderContent={<ActivityIndicator />}
            />
            <Text style={[mainTextStyle, mainTitleStyles]}>{mainText}</Text>
        </View>
       
    )
}

const styles = (props) => StyleSheet.create({
    mainTextStyle: {
        marginTop: 15,
        ...props.Theme.defaultIconHeaderTitleStyles
    },
    mainContainer: {
        alignItems: 'center', 
    },
})

export default IconHeader