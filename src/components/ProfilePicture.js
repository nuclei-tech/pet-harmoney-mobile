//header
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements';
import { size, colors } from '../theme'
import { images } from '../constants'

const ProfilePicture = ({ customStyle }) => {

    const changeProfileImage = () => {
        console.log('in');
      }
    return (
        <View >
            <TouchableOpacity onPress={changeProfileImage} >
                <Image source={images.profile} style={styles.proPic} />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    proPic: { 
        borderRadius: 100,
        borderColor: colors.WHITE,
        borderWidth: 4
      },
})
export default ProfilePicture;