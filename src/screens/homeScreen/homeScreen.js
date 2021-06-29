import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View,StatusBar, SafeAreaView } from 'react-native';
import { colors, size } from '../../theme'
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

  return (
    <SafeAreaView style={styles.container}>
        {/* <StatusBar  backgroundColor={colors.RED} hidden={true} /> */}
      <Button title="Outline button" type={'outline'} onPress={action} />
      <View style={{ backgroundColor: colors.PURPLE, flexDirection: "row" }} >
        <Button title="Solid Button" type={'outline'} custonTextStyle={{color: colors.WHITE}} color={colors.WHITE} />
        <ReminderButton />
      </View>

      <Button title="Solid Button" color={colors.GREEN} />

      <Button title="Solid Button" color={colors.RED} />
      <Button title="Solid Button" color={colors.YELLOW} custonTextStyle={{color: colors.WHITE}} />
      <Button title="Solid Button" color={colors.YELLOW} custonTextStyle={{color: colors.GREEN, fontSize:9}} />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:size.SIZE.BASE
  },
});


export default HomeScreen;