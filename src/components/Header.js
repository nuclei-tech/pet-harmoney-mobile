//header
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements';
import { size, colors } from '../theme'
import { images } from '../constants'

const CustomHeader = ({ title, headerColor }) => {
    const { headerContainer, leftHeader, rightHeader, textStyle, headerLogo, header } = styles;
    const headerContainerStyle =
        headerColor ? headerColor == 'transparent' ? [headerContainer, { backgroundColor: headerColor }] :
            [headerContainer, { backgroundColor: headerColor }, header] : headerContainer;
    const headerMainStyle = {backgroundColor: headerColor}
    return (
        <View style={headerMainStyle}>
            <SafeAreaView>
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
            </SafeAreaView>
        </View>
    );
};
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: size.SIZE.BASE,
        alignItems: 'center'
    },
    header: {
        padding: size.SIZE.BASE
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