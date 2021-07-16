import React, { useEffect, useState, useRef } from 'react';
import { ScrollView, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity, Dimensions, TouchableHighlight, Platform } from 'react-native';
import { colors, size } from '../../theme'
import { Layout2, ReceiptScanner } from '../../components'
// Connect redux store.
import { useSelector } from 'react-redux';
import { Tab, TabView } from 'react-native-elements';
import { navigate } from '../../navigation/navigation';
import { petVisitDetails } from '../../constants';
import { styles } from './styles';

const { height, width } = Dimensions.get('window');

const PetVisitDetails = (props) => {
  
  const { theme } = useSelector(state => state.theme);

  // navigate the page
  // const navigatePage = () => {
  //   navigate('LiveScreen');
  // };

  const {
    container,
    titleStyles
  } = styles(theme);
  return (
    <SafeAreaView style={container}>
        <Layout2
            type={'fullScreen'}
            layoutColor={theme.Theme.colors.RED}
            title={'PET HARMONY'}
        >
        
            <View flex={2}>
            <View flex={1.6}>
                <ScrollView>
                <Text style={titleStyles}>Log a vet visit</Text>
                <ReceiptScanner />
                </ScrollView>
            </View>
            <View flex={0.4}>
            </View>
            </View>
                
            
            
        </Layout2>
    
    </SafeAreaView>
  );
};

export default PetVisitDetails;