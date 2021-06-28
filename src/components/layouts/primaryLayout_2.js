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

    // const backgroundImage =  

    return (

        <ImageBackground resizeMode='stretch' source={images.bgRed} style={styles.image}>
            {props.inner ? (<Inner>Foo</Inner>):(<View></View>)}
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    image: {

        flex: 4,
        // width: '100%',
        height: '80%',
        resizeMode: 'stretch',
        padding: size.SIZE.BASE

    },

});




export default Layout2;