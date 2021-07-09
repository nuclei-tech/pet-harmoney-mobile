import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, SafeAreaView,  } from 'react-native';
import {  PlaceOrderCard, Header, Layout2,  IconHeader} from '../../../components'
import {images} from '../../../constants'
// Connect redux store.
import { useSelector } from 'react-redux';

const TelevetScreen = props => {
  const { theme } = useSelector(state => state.theme);
  const colors = theme.Theme.colors;
  const action = () => {
    console.log('in');
  }
  // navigate the page
  // const navigatePage = () => {
  //   navigate('LiveScreen');
  // };

  return (
    <SafeAreaView style={styles.container}>
      <Layout2
        // 
        backgroundColor={colors.WHITE}
        layoutColor={colors.WHITE}
      >
        <Header
          title='PET HARMONY'
          dark
          customtTitleStyle={{ color: theme.Theme.colors.DARK_BLUE }}
        />
        <IconHeader 
          primaryImage={images.shopping}
          primaryTextFontSize={18}
          primaryTextLineHeight={21.37}
          primaryImageWidth={53}
          primaryImageHeight={53}
          mainTextColor={colors.DARK_BLUE}
          mainText={'My Cart'}
        />
        <PlaceOrderCard 
        subtotal={'$.x.xx'} 
        shipping={'$.x.xx'} 
        total ={'$.x.xx'}
        />
      </Layout2>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});


export default TelevetScreen;