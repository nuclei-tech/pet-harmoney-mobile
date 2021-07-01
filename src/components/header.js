//header
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements';
import { size, colors } from '../theme'
import { images } from '../constants'

const CustomHeader = ({ title, headerColor, customStyle }) => {
    const { headerContainer, leftHeader, rightHeader, textStyle, headerLogo, header,headerIcon } = styles;
    const headerContainee =
        headerColor ? headerColor == 'transparent' ? [headerContainer, { backgroundColor: headerColor }] :
            [headerContainer, { backgroundColor: headerColor }, header] : headerContainer;
    const headerMainStyle = {backgroundColor: headerColor}
    const headerContainerStyle = customStyle ? [headerContainee,customStyle]:headerContainer
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
                            <Image source={images.searchIcon} style={headerIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={images.profileIcon} style={headerIcon} />
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
        fontFamily:'Aqum',
        fontSize: size.FONT_SIZES.HEADER_TITLE,
        color: colors.WHITE,
        letterSpacing: 0.2,
        textAlign: 'center'
    },
    headerLogo: {
        width:29,
        height:33.1,
        marginRight: 18
    },
    headerIcon:{
        width:24,
        height:24,
        marginLeft: 10
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