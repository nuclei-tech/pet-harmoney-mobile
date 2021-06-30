import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import { colors, size } from '../../theme'

import { images } from '../../constants';

const window = Dimensions.get('window');
const Layout2 = (props) => {

    const Inner = props.inner; // Note: variable name _must_ start with a capital letter 
    const curve = props.curve ? props.curve : 'primary'
    const getBackgroundImage = () => {
        let backgroundImage;
        switch (props.layoutColor) {
            case colors.RED:
                backgroundImage = curve == 'primary' ? images.bgRed : images.bgRed2;
                break;
            case colors.BLUE:
                backgroundImage = curve == 'primary' ? images.bgBlue:images.bgBlue2;
                break;
            case colors.DARK_BLUE:
                backgroundImage = curve == 'primary' ? images.bgDBlue:images.bgDBlue2;
                break;
            case colors.YELLOW:
                backgroundImage = images.bgYellow;
                break;
            case colors.GREEN:
                backgroundImage = images.bgGreen;
                break;
            case colors.PURPLE:
                backgroundImage = images.bgPurple;
                break;

            default:
                backgroundImage = images.bgRed
                break;
        }
        return backgroundImage;
    }

    const { fullScreen, halfScreen, betweenHalfAndFull } = styles
    const backgroundStyle = props.fullScreen ? fullScreen : props.halfScreen ? halfScreen : betweenHalfAndFull;

    return (

        <ImageBackground resizeMode='stretch' source={getBackgroundImage()} style={backgroundStyle}>
            {props.inner ? (<Inner>Foo</Inner>) : (<View></View>)}
        </ImageBackground>

    );
};

const styles = StyleSheet.create({

    fullScreen: {
        flex: 1,
        resizeMode: 'stretch',
        padding: size.SIZE.BASE,
        height: '90%',
        backgroundColor: colors.WHITE
    },
    halfScreen: {
        flex: 1,
        resizeMode: 'stretch',
        padding: size.SIZE.BASE,
        backgroundColor: colors.WHITE,
        height: '60%',
    },
    betweenHalfAndFull: {
        flex: 1,
        resizeMode: 'stretch',
        padding: size.SIZE.BASE,
        height: '75%',
        backgroundColor: colors.WHITE
    }

});




export default Layout2;