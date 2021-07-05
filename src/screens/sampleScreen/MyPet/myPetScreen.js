import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Button, Header, Calendar , ReminderButton, Layout2 } from '../../components'
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
        type={'fullScreen'}
        layoutColor={theme.Theme.colors.PURPLE} // color is required
      >
        <Header title={'pet harmony'}/>
        <Calendar/>
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