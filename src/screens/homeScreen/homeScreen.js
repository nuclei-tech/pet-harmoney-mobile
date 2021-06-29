import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View,StatusBar, SafeAreaView, ScrollView, Platform } from 'react-native';
import { colors, size } from '../../theme'
import { Button, Header, ReminderButton, ReminderDetailCard  } from '../../components'
// Connect redux store.
import { useSelector } from 'react-redux';
;
import { navigate } from '../../navigation/navigation';
import {reminderDetails} from '../../constants'

const HomeScreen = props => {
  const { theme } = useSelector(state => state.theme);
  
  const action = () => {
    console.log('in');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{marginBottom: 10}}>

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


      <ReminderDetailCard 
          backgroundColor={colors.DARK_BLUE} 
          titleColor={colors.YELLOW} 
          descriptionColor={colors.GREY}
          borderBottomColor={colors.GREY}
          dataList={reminderDetails}
          checkBoxExist
        />
        <ReminderDetailCard 
          backgroundColor={colors.GREEN} 
          titleColor={colors.PURPLE} 
          descriptionColor={colors.DARK_BLUE}
          borderBottomColor={colors.DARK_BLUE}
          dataList={reminderDetails}
        />
        <ReminderDetailCard 
          backgroundColor={colors.BLUE} 
          titleColor={colors.GREEN} 
          descriptionColor={colors.WHITE}
          borderBottomColor={colors.GREY}
          headerTitleColor={colors.WHITE}
          headerTitle={'Upcoming Sessions'}
          dataList={reminderDetails}
          listButtonExist
          listBtnColor={colors.GREEN}
          listBtnTxtColor={colors.DARK_BLUE}
          listBtnTitle={'Start Session'}
        />
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Platform.OS === 'android' ? size.SIZE.BASE : size.SIZE.BASE / 4,
    backgroundColor:'white'
  },
});


export default HomeScreen;