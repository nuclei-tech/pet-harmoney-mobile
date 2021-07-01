//header
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { size, colors } from '../theme'
import { images } from '../constants'
import { ProfilePicture } from '.'; './ProfilePicture'

const CustomHeader = ({ title,customStyle, login }) => {
    const { headerContainer, leftHeader, rightHeader, textStyle, headerLogo, header, headerIcon, profileImageIcon } = styles;
    return (
        <View style={customStyle}>
            <SafeAreaView>
                <View style={{ ...headerContainer }}>
                    <View style={leftHeader}>
                        <Image source={images.logo} style={headerLogo} />
                        <Text style={textStyle}>{title}</Text>
                    </View>
                    <View style={rightHeader}>
                        <TouchableOpacity>
                            <Image source={images.searchIcon} style={headerIcon} />
                        </TouchableOpacity>
                        {login ? 
                        <TouchableOpacity>
                            <ProfilePicture source={images.profile} customStyle={{...headerIcon,...profileImageIcon}} /> 
                        </TouchableOpacity> : 
                        <TouchableOpacity>
                            <Image source={images.profileIcon} style={headerIcon} />
                        </TouchableOpacity>}
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
        fontFamily: 'Aqum',
        fontSize: size.FONT_SIZES.HEADER_TITLE,
        color: colors.WHITE,
        letterSpacing: 0.2,
        textAlign: 'center'
    },
    headerLogo: {
        width: 29,
        height: 33.1,
        marginRight: 18
    },
    headerIcon: {
        width: 24,
        height: 24,
        marginLeft: 10
    },
    leftHeader: {
        flexDirection: "row",
        alignItems: 'center'
    },
    rightHeader: {
        flexDirection: "row",
    },
    profileImageIcon:{
        width:24,
        height:24,
        borderWidth:1
    }
})
export default CustomHeader;