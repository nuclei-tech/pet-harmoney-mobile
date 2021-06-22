import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { colors } from '../../theme'
import { Button, Header, ReminderButton  } from '../../components'
// Connect redux store.
import { useSelector } from 'react-redux';
;
import { navigate } from '../../navigation/navigation';

const HomeScreen = props => {
  const { theme } = useSelector(state => state.theme);
  const action = () => {
    console.log('in');
  }
  // navigate the page
  // const navigatePage = () => {
  //   navigate('LiveScreen');
  // };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Header title='PET HARMONY' headerColor={colors.RED} /> */}
      {/* <StatusBar style="auto" /> */}

      <Button title="Outline button" type={'outline'} onPress={action} />
      <View style={{ backgroundColor: colors.PURPLE, flexDirection: "row" }} >
        <Button title="Solid Button" type={'outline'} color={colors.WHITE} textColor={colors.WHITE} />
        <ReminderButton />
      </View>

      <Button title="Solid Button" color={colors.GREEN} />

      <Button title="Solid Button" color={colors.RED} />
      <Button title="Solid Button" color={colors.YELLOW} textColor={colors.WHITE} />
      <Button title="Solid Button" color={colors.YELLOW} textColor={colors.BLACK} />


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});


export default HomeScreen;