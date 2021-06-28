
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { size, colors } from '../theme'
import { images } from '../constants'

const CustomHeader = ({ title, headerColor }) => {

    const { headerContainer, leftHeader, rightHeader, textStyle, headerLogo } = styles;
    const headerContainerStyle = headerColor ? headerColor=='transparent' ? [headerContainer, { backgroundColor: headerColor }]: [headerContainer, { backgroundColor: headerColor , paddingHorizontal: size.SIZE.PADDING * 2, paddingVertical:size.SIZE.PADDING*1.5, }]: headerContainer;
    return (
        <View style={headerContainerStyle}>
            <View style={leftHeader}>
                <Image source={images.logo} style={headerLogo} />
                <Text style={textStyle}>{title}</Text>
            </View>
            <View style={rightHeader}>
                <TouchableOpacity>
                    <Image source={images.searchIcon} style={headerLogo} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={images.profileIcon} style={headerLogo} />
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        // paddingHorizontal: size.SIZE.PADDING * 2,
        // paddingVertical:size.SIZE.PADDING*1.5,
        alignItems: 'center'
    },
    textStyle: {
        fontSize: size.FONT_SIZES.HEADER_TITLE,
        color: colors.WHITE,
        fontWeight: 'bold',
        letterSpacing: 0.2,
        textAlign: 'center'
    },
    headerLogo: {
        marginRight: size.SIZE.MARGIN
    },
    leftHeader: {
        flexDirection: "row",
        alignItems: 'center'
    },
    rightHeader: {
        flexDirection: "row",
    }
})
export default CustomHeader;