//header
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ImageBackground, Image, Dimensions } from 'react-native';
import { images } from '../constants'
import { ProfilePicture, Header } from '../components';
import { useSelector } from 'react-redux';

const { height, width } = Dimensions.get('window');
const Cover = ({ customStyle, coverImage, event, children, customEventStyle, eventName, name, customNameStyle, description, customDescriptionStyle }) => {
    const { theme } = useSelector(state => state.theme);
    const changeProfileImage = () => {
        console.log('in');
    }
    const {
        container,
        backGroundImageContainer,
        imageContainer,
        image,
        headerCustomStyle,
        proPicContainer,
        proPic,
        whitBackgroundContainer,
        coverHeader,
        nameStyle,
        discriptionStyle,
        eventStyle
    } = styles(theme.Theme);
    return (
        <View style={{ ...container, ...customStyle }}>
            <View flex={1} style={backGroundImageContainer}>
                <TouchableHighlight onPress={changeProfileImage} flex={0.6} style={imageContainer} >
                    <Image resizeMode='stretch' source={event ? images.event: coverImage} style={image} />
                </TouchableHighlight>
                <View>
                    <Header title='PET HARMONY' login={true} customStyle={headerCustomStyle} />
                </View>
                <View onPress={changeProfileImage} flex={1} style={proPicContainer}>
                    {event ? <></> : <ProfilePicture source={images.profile} />}
                </View>
            </View>

            <View flex={3} >
                <ImageBackground resizeMode='stretch' source={images.bgWhite} style={whitBackgroundContainer}>
                    <View style={coverHeader}>
                        {event ? <Text style={{ ...eventStyle, ...customEventStyle }}>{eventName}</Text> : <></>}
                        <Text style={{ ...nameStyle, ...customNameStyle }}>{name}</Text>
                        {event ? <></> : <Text style={{ ...discriptionStyle, ...customDescriptionStyle }}>{description}</Text>}
                        {children}
                    </View>
                </ImageBackground>

            </View>
        </View>
    );
};
const styles = (theme) => StyleSheet.create({
    container: {
        flex: 4,
        backgroundColor: theme.colors.WHITE
    },
    coverHeader: {
        marginTop: height * 0.11,
        alignItems: 'center'
    },
    eventStyle: {
        color: theme.colors.BLUE,
        fontFamily: 'Aqum',
        fontSize: 22,
        lineHeight: 21,
    },
    nameStyle: {
        fontSize: 36,
        fontFamily: 'SourceSansPro-Light'
    },
    discriptionStyle: {
        fontSize: 14,
        lineHeight: 18,
        fontFamily: 'SourceSansPro-Light'
    },
    backGroundImageContainer: {
        justifyContent: 'space-between'
    },
    imageContainer: {
        position: 'absolute',
        width: '100%'
    },
    image: {
        width: '100%'
    },
    headerCustomStyle: {
        padding: theme.size.CONTAINER_PADDING
    },
    proPicContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        top: height * 0.1,
        zIndex: 2
    },
    proPic: {
        position: 'absolute',
        bottom: -(height * 10 / 100),
        borderRadius: 100,
        borderColor: theme.colors.WHITE,
        borderWidth: 4
    },
    whitBackgroundContainer: {
        width: '100%',
        height: '100%'
    }
})
export default Cover;