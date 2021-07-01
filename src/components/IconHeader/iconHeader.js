import React from 'react'
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native'
import { Image } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { images } from '../../constants'
import { size, colors } from '../../theme'

const IconHeader = ({
    primaryImage,
    primaryTextFontSize,
    primaryImageWidth,
    primaryImageHeight,
    primaryTextLineHeight,
    mainTextColor, 
    mainText, 
    multiple, 
    secondaryImage1, 
    secondaryImage2, 
    secondaryImage3, 
    secondaryImage4
}) => {

    const imageStyles = {width: primaryImageWidth, height: primaryImageHeight}
    const {theme} = useSelector(state => state.theme)

    return (
        <>
        {!multiple ? <View style={styles(theme).mainContainer}>
            <Image
                    source={primaryImage}
                    style={imageStyles}
                    PlaceholderContent={<ActivityIndicator />}
            />
            <Text style={[styles(theme).mainText, {color: mainTextColor, fontSize: primaryTextFontSize, lineHeight: primaryTextLineHeight}]}>{mainText}</Text>
        </View>
        :
        <View style={styles(theme).mainContainerHorizontal}>
            <View>
                <Image
                        source={secondaryImage1}
                        style={styles(theme).secondaryImage}
                        PlaceholderContent={<ActivityIndicator />}
                />
            </View>
            <View>
                <Image
                        source={secondaryImage2}
                        style={styles(theme).secondaryImage}
                        PlaceholderContent={<ActivityIndicator />}
                />
            </View>
            <View>
                <Image
                        source={secondaryImage3}
                        style={styles(theme).secondaryImage}
                        PlaceholderContent={<ActivityIndicator />}
                />
            </View>
            <View>
                <Image
                        source={secondaryImage4}
                        style={styles(theme).secondaryImage}
                        PlaceholderContent={<ActivityIndicator />}
                />
            </View>
        </View>}
        </>
    )
}

const styles = (props) => StyleSheet.create({
    mainText: {
        fontFamily: 'Source Sans Pro',
        fontWeight: 'bold',
        marginTop: 15
    },
    mainContainer: {
        alignItems: 'center', 
        marginTop: 40,
        marginBottom: 35
    },
    mainContainerHorizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 35,
        marginTop: 61
    },
    secondaryImage: {
        width: 53.26,
        height: 69,
    },
})

export default IconHeader