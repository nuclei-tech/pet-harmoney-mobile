//header
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { images } from '../constants'
import { ProfilePicture } from '.'; './ProfilePicture'
import { useSelector } from 'react-redux';

const CustomHeader = ({ title, noIcon, customStyle, login, dark,customContainerStyle, customtTitleStyle }) => {
    const { theme } = useSelector(state => state.theme);
    const { headerContainer, leftHeader, rightHeader, textStyle, headerLogo, header, headerIcon, profileImageIcon } = styles(theme.Theme);
    const logo = dark ? images.logo_Black : images.logo;
    const searchIcon = dark ? images.searchIcon_Black : images.searchIcon;
    const profileIcon = dark ? images.profileIcon_Black : images.profileIcon;
    return (
        <View style={customStyle}>
            <SafeAreaView>
                <View style={{ ...headerContainer, ...customContainerStyle }}>
                    <View style={leftHeader}>
                        <Image source={logo} style={headerLogo} />
                        <Text style={{ ...textStyle, ...customtTitleStyle }}>{title}</Text>
                    </View>
                    {noIcon ? <></> : <View style={rightHeader}>
                        <TouchableOpacity>
                            <Image source={searchIcon} style={headerIcon} />
                        </TouchableOpacity>
                        {login ?
                            <TouchableOpacity>
                                <ProfilePicture source={images.profile} customStyle={{ ...headerIcon, ...profileImageIcon }} />
                            </TouchableOpacity> :
                            <TouchableOpacity>
                                <Image source={profileIcon} style={headerIcon} />
                            </TouchableOpacity>}
                    </View>}
                </View>
            </SafeAreaView>
        </View>
    );
};
const styles = (theme) => StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: theme.size.BASE,
        alignItems: 'center'
    },
    header: {
        padding: theme.size.BASE
    },
    textStyle: {
        fontFamily: 'Aqum',
        fontSize: theme.size.HEADER_TITLE,
        color: theme.colors.WHITE,
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
        marginLeft: 10,
    },
    leftHeader: {
        flexDirection: "row",
        alignItems: 'center'
    },
    rightHeader: {
        flexDirection: "row",
    },
    profileImageIcon: {
        width: 24,
        height: 24,
        borderWidth: 1,
    }
})
export default CustomHeader;