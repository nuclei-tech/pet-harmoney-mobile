import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import { colors, size } from '../../theme'
import { Svg, Path, Ellipse } from 'react-native-svg';

import { images } from '../../constants';
// Connect redux store.
import { useSelector } from 'react-redux';

const window = Dimensions.get('window');
const Layout2 = (props) => {
    const Inner = props.inner; // Note: variable name _must_ start with a capital letter 

    const getBackgroundImage = () => {
        let backgroundImage;
        switch (props.layoutColor) {
            case colors.RED:
                backgroundImage = images.bgRed;
                break;
            case colors.BLUE:
                backgroundImage = images.bgBlue;
                break;
            case colors.DARK_BLUE:
                backgroundImage = images.bgDBlue;
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
    // const backgroundImage =  
    const { fullScreen, halfScreen,betweenHalfAndFull} = styles
    const backgroundStyle = props.fullScreen? fullScreen : props.halfScreen? halfScreen:betweenHalfAndFull;
    console.log(backgroundStyle);
    return (

        <ImageBackground resizeMode='stretch' source={getBackgroundImage()} style={backgroundStyle}>
            {props.inner ? (<Inner>Foo</Inner>) : (<View></View>)}
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
   
    fullScreen:{
        flex: 1,
        resizeMode: 'stretch',
        padding: size.SIZE.BASE,
        height: '90%',
    },
    halfScreen :{
        flex: 1,
        resizeMode: 'stretch',
        padding: size.SIZE.BASE,
        height: '60%',
    },
    betweenHalfAndFull : {
        flex: 1,
        resizeMode: 'stretch',
        padding: size.SIZE.BASE,
        height: '75%',
    }

});




export default Layout2;