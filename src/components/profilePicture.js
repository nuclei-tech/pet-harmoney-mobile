//header
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements';
import { images } from '../constants'
import { navigate } from '../navigation/navigation'
// Connect redux store.
import { useSelector } from 'react-redux';

const ProfilePicture = ({ customStyle,customImage,removeDefualtStyle, useInTabs, useInTabsNavigationScreen }) => {
    const { theme } = useSelector(state => state.theme);
    const changeProfileImage = () => {
        if(useInTabs){
            navigate(useInTabsNavigationScreen)
        } else {
            console.log('in');
        }
    }
    return (
        <View >
            <TouchableOpacity onPress={changeProfileImage} >
                <Image source={customImage ? customImage :images.profile} style={removeDefualtStyle ? customStyle :{ ...styles(theme).proPic, ...customStyle }} />
            </TouchableOpacity>
        </View>
    );
};
const styles =(theme)=> StyleSheet.create({
    proPic: {
        width: 140,
        height: 140,
        borderRadius: 100,
        borderColor: theme.Theme.colors.WHITE,
        borderWidth: 4
    },
})
export default ProfilePicture;