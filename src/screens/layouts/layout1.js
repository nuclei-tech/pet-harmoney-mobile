import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { colors } from '../../theme'
// Connect redux store.
import { useSelector } from 'react-redux';
;
import { navigate } from '../../navigation/navigation';

const Layout1 = props => {
    const { theme } = useSelector(state => state.theme);

    // navigate the page
    // const navigatePage = () => {
    //   navigate('LiveScreen');
    // };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>layout 1</Text>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});


export default Layout1;