import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { colors, size } from '../../theme'
import { Button, Header, ReminderButton, Layout2 } from '../../components'
// Connect redux store.
import { useSelector } from 'react-redux';
;
import { navigate } from '../../navigation/navigation';

const TelevetScreen = props => {
  const { theme } = useSelector(state => state.theme);
  const action = () => {
    console.log('in');
  }
  // navigate the page
  // const navigatePage = () => {
  //   navigate('LiveScreen');
  // };
  const Label = (props) => {
    return (
      <View>
        <Header title='PET HARMONY' headerColor={'transparent'} />
        <Text>From parent</Text>
        <Text>From parent</Text>
        <Text>From parent</Text>
        <Text>From parent</Text>
        
      </View>
      )
  }
  return (
    <SafeAreaView style={styles.container}>
      <Layout2
        inner={Label}
        layoutColor={colors.RED} // color is required
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});


export default TelevetScreen;