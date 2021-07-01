import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import { colors } from '../../theme'
import { Svg, Path } from 'react-native-svg';
import { Button, Layout2, Header } from '../../components'
// Connect redux store.
import { useSelector } from 'react-redux';

import { navigate } from '../../navigation/navigation';
const window = Dimensions.get('window');
const Layout1 = props => {
    const { theme } = useSelector(state => state.theme);
    
    // navigate the page
    // const navigatePage = () => {
    //   navigate('LiveScreen');
    // };
    const Label =(props) => {
        return (
          <View>
           <Header title='PET HARMONY' headerColor={'transparent'} />
            
          </View>
          )
      }
    return (
        <SafeAreaView style={styles.container}>
            <Layout2
            inner={Label}  
            type={'halfScreen'}       
            curve = {'primary'}    
            layoutColor={theme.Theme.colors.BLUE} />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'space-between',
        

    },
    containerStyle: {
        height: 244
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        width: '100%'
    }

});




export default Layout1;