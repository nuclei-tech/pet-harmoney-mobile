import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Button, Header, ReminderButton, Layout2, CreditCardScanner } from '../../components'
import { images } from'../../constants';
// Connect redux store.
import { useSelector } from 'react-redux';
;
import { navigate } from '../../navigation/navigation';

const MyPetScreen = props => {
  const { theme } = useSelector(state => state.theme);
  const action = () => {
    console.log('in');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Layout2
        type={'small'}
        layoutColor={theme.Theme.colors.PURPLE} // color is required
      >
        <CreditCardScanner
          middleImage={images.creditCardPurple}
        />
        {/* <Text>From parent</Text> */}
      </Layout2>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});


export default MyPetScreen;