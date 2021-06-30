import React from 'react';
import { StyleSheet, View, TouchableNativeFeedback, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import { size, colors } from '../../theme'


const MediumContanier = ({ customContainStyle, children }) => {
    return (
        <View style={{ ...styles.contanierStyles, ...customContainStyle }} >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    contanierStyles: {
        marginHorizontal: Dimensions.get('window').width/100*15,
    },
})
export default MediumContanier;