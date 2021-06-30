import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, ScrollView, Platform } from 'react-native';
import { colors, size } from '../../theme'
import { Button, Header, ReminderButton, ReminderDetailCard, ParagraphCard, Layout2,InputField  } from '../../components'
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
      <Layout2
      type={'fullScreen'} // {halfScreen, small }
      layoutColor={colors.DARK_BLUE}
      backgroundColor={colors.GREEN}
      >
        <ScrollView style={{ marginBottom: 10 }}   showsVerticalScrollIndicator={false}
>

          {/* <StatusBar  backgroundColor={colors.RED} hidden={true} /> */}
          <Button title="Outline button" type={'outline'} onPress={action} />
            <Button title="Solid Button" type={'outline'} custonTextStyle={{ color: colors.WHITE }} color={colors.WHITE} />
            <ReminderButton />

          <Button title="Solid Button" color={colors.GREEN} />

          <Button title="Solid Button" color={colors.RED} />
          <Button title="Solid Button" color={colors.YELLOW} custonTextStyle={{ color: colors.WHITE }} />
          <Button title="Solid Button" color={colors.YELLOW} custonTextStyle={{ color: colors.GREEN, fontSize: 9 }} />

          <View style={{ flex: 12, flexDirection: 'row'}}>
          <View style={{ flex: 8 }}>
            <InputField
              customMainContanier={{ backgroundColor: '#0F1E51' }}
              placeholderColor={theme.Theme.createAccount.placeHolderColor}
              placeholder={'123 - 456 - 7890'}
            />
          </View>
          <View style={{ flex: 4 ,marginLeft:4}}>
            <InputField
              customMainContanier={{ backgroundColor: '#0F1E51' }}
              placeholderColor={theme.Theme.createAccount.placeHolderColor}
              placeholder={'123'}
            />
          </View>
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

      </Layout2>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});


export default HomeScreen;