import React from 'react'
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native'
import { Image } from 'react-native-elements';
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

    return (
        <>
        {!multiple ? <View style={styles.mainContainer}>
            <Image
                    source={primaryImage}
                    style={imageStyles}
                    PlaceholderContent={<ActivityIndicator />}
            />
            <Text style={[styles.mainText, {color: mainTextColor, fontSize: primaryTextFontSize, lineHeight: primaryTextLineHeight}]}>{mainText}</Text>
        </View>
        :
        <View style={styles.mainContainerHorizontal}>
            <View>
                <Image
                        source={secondaryImage1}
                        style={styles.secondaryImage}
                        PlaceholderContent={<ActivityIndicator />}
                />
            </View>
            <View>
                <Image
                        source={secondaryImage2}
                        style={styles.secondaryImage}
                        PlaceholderContent={<ActivityIndicator />}
                />
            </View>
            <View>
                <Image
                        source={secondaryImage3}
                        style={styles.secondaryImage}
                        PlaceholderContent={<ActivityIndicator />}
                />
            </View>
            <View>
                <Image
                        source={secondaryImage4}
                        style={styles.secondaryImage}
                        PlaceholderContent={<ActivityIndicator />}
                />
            </View>
        </View>}
        </>
    )
}

const styles = StyleSheet.create({
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