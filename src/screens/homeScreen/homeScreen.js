import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, ScrollView, Platform } from 'react-native';
import { colors, size } from '../../theme'
import InputField from '../../layout/forms/textField'
import { Button, ReminderButton, ReminderDetailCard, Layout2 } from '../../components'
// Connect redux store.
import { useSelector } from 'react-redux';
;
import { navigate } from '../../navigation/navigation';
import { reminderDetails } from '../../constants'
import { Colors } from 'react-native/Libraries/NewAppScreen';

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


          <InputField
            inputBackgroundColor={colors.DARK_BLUE}
            borderColor={colors.GREEN}
            inputColor={colors.GREEN}
            placeholderColor={colors.GREEN}
            placeholder={'Enter name here'}
            inputTextAlign={'center'}
          />

          <View style={{  paddingTop: 20 }}>

            <InputField
              inputBackgroundColor={colors.RED}
              borderColor={colors.WHITE}
              inputColor={colors.WHITE}
              placeholderColor={colors.WHITE}
              placeholder={'Enter pet name'}
              inputTextAlign={'center'}
            />

          </View>

          <View style={{paddingTop: 20 }}>

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