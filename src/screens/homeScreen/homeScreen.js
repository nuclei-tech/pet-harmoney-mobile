import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, ScrollView, Platform } from 'react-native';
import { Button, PlaceOrderCard, Header, ReminderButton, ReminderDetailCard, ParagraphCard, Layout2, InputField, Paragraph, MyCardList, ShoppingCardList, ProfilePicture } from '../../components'
// Connect redux store.
import { useSelector } from 'react-redux';
import { images } from '../../constants';
import { navigate } from '../../navigation/navigation';
import { reminderDetails, termsAndConditions, ratingComment, myCardList } from '../../constants'

const HomeScreen = props => {
  const { theme } = useSelector(state => state.theme);

  const action = () => {
    console.log('in');
  }


  return (
    <SafeAreaView style={styles.container}>
      <Layout2
        type={'fullScreen'} // {halfScreen, small }
        layoutColor={theme.Theme.colors.DARK_BLUE}
        backgroundColor={theme.Theme.colors.GREEN}
      >
        <Header 
        title='PET HARMONY' 
        // dark 
        // login={true} 
        // customtTitleStyle={{color:theme.Theme.colors.DARK_BLUE}}
        />
        <ScrollView style={{ marginBottom: 10 }} showsVerticalScrollIndicator={false}
        >
          {/* <StatusBar  backgroundColor={theme.Theme.colors.RED} hidden={true} /> */}
          <Button title="Outline button" type={'outline'} onPress={action} />
          <Button title="Solid Button" type={'outline'} custonTextStyle={{ color: theme.Theme.colors.WHITE }} color={theme.Theme.colors.WHITE} />
          <ReminderButton />

          <Button title="Solid Button" color={theme.Theme.colors.GREEN} />

          <Button title="Solid Button" color={theme.Theme.colors.RED} />
          <Button title="Solid Button" textTransform={'lowercase'} color={theme.Theme.colors.YELLOW} custonTextStyle={{ color: theme.Theme.colors.WHITE }} />
          <Button title="Solid Button" textTransform={'uppercase'} color={theme.Theme.colors.YELLOW} custonTextStyle={{ color: theme.Theme.colors.GREEN, fontSize: 9 }} />

          <View>
            <InputField
              customMainContanier={{ backgroundColor: '#0F1E51' }}
              placeholderColor={theme.Theme.createAccount.placeHolderColor}
              placeholder={'123 - 456 - 7890'}
            />
          </View>

          <View style={{ flex: 12, flexDirection: 'row' }}>
            <View style={{ flex: 8 }}>
              <InputField
                customMainContanier={{ backgroundColor: '#ffffff', borderColor: '#ffffff' }}
                placeholderColor={theme.Theme.createAccount.placeHolderColor}
                placeholder={'123 - 456 - 7890'}
              />
            </View>
            <View style={{ flex: 4, marginLeft: 10 }}>
              <InputField
                customMainContanier={{ backgroundColor: '#ffffff', borderColor: '#ffffff' }}
                customTextStyle={{ textAlign: 'left' }}
                placeholderColor={theme.Theme.createAccount.placeHolderColor}
                placeholder={'123'}
              />
            </View>
          </View>

          <ReminderDetailCard
            backgroundColor={theme.Theme.colors.DARK_BLUE}
            titleColor={theme.Theme.colors.YELLOW}
            descriptionColor={theme.Theme.colors.GREY}
            borderBottomColor={theme.Theme.colors.GREY}
            dataList={reminderDetails}
            checkBoxExist
          />
          <ReminderDetailCard
            backgroundColor={theme.Theme.colors.GREEN}
            titleColor={theme.Theme.colors.PURPLE}
            descriptionColor={theme.Theme.colors.DARK_BLUE}
            borderBottomColor={theme.Theme.colors.DARK_BLUE}
            dataList={reminderDetails}
          />
          <ReminderDetailCard
            backgroundColor={theme.Theme.colors.BLUE}
            titleColor={theme.Theme.colors.GREEN}
            descriptionColor={theme.Theme.colors.WHITE}
            borderBottomColor={theme.Theme.colors.GREY}
            headerTitleColor={theme.Theme.colors.WHITE}
            headerTitle={'Upcoming Sessions'}
            dataList={reminderDetails}
            listButtonExist
            listBtnColor={theme.Theme.colors.GREEN}
            listBtnTxtColor={theme.Theme.colors.DARK_BLUE}
            listBtnTitle={'Start Session'}
          />
          <View style={{ backgroundColor: theme.Theme.colors.DARK_BLUE, paddingVertical: 20, marginTop: 10, paddingHorizontal: 30 }}>
            <ParagraphCard
              cardBorderColor={theme.Theme.colors.GREEN}
              cardBackgroundColor={'transparent'}
              titleColor={theme.Theme.colors.GREEN}
              title={'Terms and Conditions'}
              titleAlign={'left'}
              imageExists
            >
              <Paragraph
                textColor={theme.Theme.colors.WHITE}
                paragraph={termsAndConditions}
                textFontSize={14}
                textFontLineHeight={18}
                textFontWeight={'300'}
              />
            </ParagraphCard>
          </View>
          <View style={{ backgroundColor: theme.Theme.colors.WHITE, paddingVertical: 20, marginTop: 10, paddingHorizontal: 30 }}>
            <ParagraphCard
              cardBorderColor={theme.Theme.colors.YELLOW}
              cardBackgroundColor={'transparent'}
            >
              <Paragraph
                textColor={theme.Theme.colors.BLACK}
                paragraph={ratingComment}
                textFontSize={14}
                textFontLineHeight={18}
                textFontWeight={'300'}
              />
            </ParagraphCard>
            <Paragraph
              textColor={theme.Theme.colors.YELLOW}
              paragraph={ratingComment}
              textFontSize={11}
              textFontLineHeight={14}
              textFontWeight={'300'}
            />
            <Paragraph
              textColor={theme.Theme.colors.DARK_BLUE}
              paragraph={ratingComment}
              textFontSize={10}
              textFontLineHeight={13}
              textFontWeight={'200'}
            />
            <Paragraph
              textColor={theme.Theme.colors.DARK_BLUE}
              paragraph={ratingComment}
              textFontSize={12}
              textFontLineHeight={15}
              textFontWeight={'bold'}
            />

          </View>

          <View style={{ backgroundColor: 'white', paddingHorizontal: 10 }}>
            {myCardList.map(data => {
              return (
                <MyCardList data={data} />
              )
            })}
          </View>
          
          <View style={{ backgroundColor: 'white', paddingHorizontal: 10, marginTop: 15 }}>
            {myCardList.map(data => {
              return (
                <ShoppingCardList data={data} />
              )
            })}
          </View>

          <View style={{ backgroundColor: 'white', paddingHorizontal: 20 }}>
            {myCardList.map(data => {
              return (
                <MyCardList data={data} />
              )
            })}
          </View>

          <View style={{ paddingTop: 16, flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>
            <ProfilePicture source={images.profile} />
            <ProfilePicture source={images.profile} customStyle={{ width: 79, height: 79, borderWidth: 2 }} />
            <ProfilePicture source={images.profile} customStyle={{ width: 24, height: 24, borderWidth: 1 }} />
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