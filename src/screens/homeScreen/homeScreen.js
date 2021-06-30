import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View,StatusBar, SafeAreaView, ScrollView, Platform } from 'react-native';
import { colors, size } from '../../theme'
import InputField from '../../layout/forms/textField'
import { Button, Header, ReminderButton, ReminderDetailCard, ParagraphCard  } from '../../components'
// Connect redux store.
import { useSelector } from 'react-redux';
;
import { navigate } from '../../navigation/navigation';
import {reminderDetails, termsAndConditions, ratingComment} from '../../constants'

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


      <InputField
        inputBackgroundColor={colors.DARK_BLUE} 
        borderColor={colors.GREEN}
        inputColor={colors.GREEN}
        placeholderColor={colors.GREEN}
        placeholder={'Enter name here'}
        inputTextAlign={'center'}
      />

<View style={{backgroundColor: colors.RED, paddingTop: 20}}>

      <InputField
        inputBackgroundColor={colors.RED} 
        borderColor={colors.WHITE}
        inputColor={colors.WHITE}
        placeholderColor={colors.WHITE}
        placeholder={'Enter pet name'}
        inputTextAlign={'center'}
      />

      </View>

      <View style={{backgroundColor: colors.GREEN, paddingTop: 20}}>

      <InputField
        inputBackgroundColor={colors.WHITE} 
        borderColor={colors.WHITE}
        inputColor={colors.GREEN}
        placeholderColor={colors.GREEN}
        placeholder={'Enter card name'}
        inputTextAlign={'left'}
      />
      </View>

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

        <View style={{backgroundColor: colors.DARK_BLUE, paddingVertical: 20, marginTop: 10, paddingHorizontal: 30}}>
          <ParagraphCard 
            cardBorderColor={colors.GREEN}
            cardBackgroundColor={'transparent'}
            titleColor={colors.GREEN}
            textColor={colors.WHITE}
            title={'Terms and Conditions'}
            titleAlign={'left'}
            paragraph={termsAndConditions}
            imageExists
          />
        </View>
        <View style={{backgroundColor: colors.WHITE, paddingVertical: 20, marginTop: 10, paddingHorizontal: 30}}>
          <ParagraphCard 
            cardBorderColor={colors.YELLOW}
            cardBackgroundColor={'transparent'}
            textColor={colors.BLACK}
            paragraph={ratingComment}
          />
        </View>
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