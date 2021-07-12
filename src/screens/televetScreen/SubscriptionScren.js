import React, { useState } from 'react';
import { Text, View, SafeAreaView, Dimensions, TouchableOpacity, ScrollView, Image, StyleSheet, FlatList } from 'react-native';
import { styles } from './styles';
import { Layout2, Button, ScheduleTitle, SubscriptionCard } from '../../components'
import { images, practitioners } from '../../constants'
import { navigate } from '../../navigation/navigation';
// Connect redux store.
import { useSelector } from 'react-redux';
import { he } from 'date-fns/locale';

const { width, height } = Dimensions.get('window');
const SubscriptionScren = props => {

  const { theme } = useSelector(state => state.theme);
  const [selectedId, setSelectedId] = useState(null);

  const { container, containee, inputContainer } = styles(props, theme);
  const {
    btnMrginTop,
    ListContainer,
    imageContainer,
    sheduleText,
    sheduleNameText,
    sheduleDetailContainer,
    dateStyle,
    timeStyle,
    headingStyle,
    customContentTitleStyle,
    customMainTextStyle,
    customBottomTopStyle,
    customLeftContentStyle,
  } = customStyles(theme);


  return (
    <SafeAreaView style={container}>
      <Layout2
        backgroundColor={theme.Theme.colors.PURPLE}
        title={'pet harmony'}
        noIcon
        customContainerStyle={{ justifyContent: 'center' }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View flex={1} style={containee}>
            <View flex={0.75} style={sheduleDetailContainer}>
              <ScheduleTitle >
                <Text style={sheduleText}>Virtual Session with </Text>
                <Text style={sheduleNameText}>Dr Shayna McAfee, DVM</Text>
              </ScheduleTitle>
              <Text style={dateStyle}>May 15</Text>
              <Text style={timeStyle}>at 2:30PM</Text>
              <Text style={headingStyle}>Payment Options</Text>
            </View>
            <View flex={1} style={ListContainer}>
              <SubscriptionCard
                customContentTitleStyle={customContentTitleStyle}
                customMainTextStyle={customMainTextStyle}
                customBottomTopStyle={customBottomTopStyle}
                customLeftContentStyle={customLeftContentStyle}
                title={'Subscription'}
                contentTitle={'Yearly Subscription'}
                leftContent={'$XX.XX Billed annually asa recurring payment'}
                rightTopContent={'$X.XX'}
                rightBottomContent={'Per Year'} />

              <SubscriptionCard
                customContentTitleStyle={customContentTitleStyle}
                customMainTextStyle={customMainTextStyle}
                customBottomTopStyle={customBottomTopStyle}
                customLeftContentStyle={customLeftContentStyle}
                contentTitle={'Monthly Subscription'}
                leftContent={'$XX.XX Billed monthly as a recurring payment'}
                rightTopContent={'$X.XX'}
                rightBottomContent={'Per Month'} />

              <SubscriptionCard
                customContentTitleStyle={customContentTitleStyle}
                customMainTextStyle={customMainTextStyle}
                customBottomTopStyle={customBottomTopStyle}
                customLeftContentStyle={customLeftContentStyle}
                title={'Pay as you go'}
                contentTitle={'Single Consultation'}
                leftContent={'One-time payment for a single consultation'}
                rightTopContent={'$X.XX'}
                rightBottomContent={'Per Visit'}
                customMainCardContanier={{ marginTop: 32 }} />

            </View>
          </View>
        </ScrollView>
      </Layout2>
    </SafeAreaView>
  );
};

const customStyles = (theme) => StyleSheet.create({
  sheduleDetailContainer: {
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
  },
  sheduleText: {
    fontWeight: '100',
    fontFamily: 'SourceSansPro-Light',
    fontSize: 18,
    lineHeight: 22.63,

  },
  sheduleNameText: {
    fontFamily: 'SourceSansPro-Regular',
    fontWeight: '700'
  },
  dateStyle: {
    fontFamily: 'SourceSansPro-Light',
    fontSize: 64,
    lineHeight: 118,
    color: theme.Theme.colors.WHITE,
    textAlign: 'center',
  },
  timeStyle: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '700',
    color: theme.Theme.colors.WHITE,
    textAlign: 'center',
    marginTop:-10,
    marginBottom:12
  },
  headingStyle: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 20,
    lineHeight: 25,
    fontWeight: '700',
    color: theme.Theme.colors.WHITE,
    textAlign: 'center',
    paddingVertical:20
  },
  btnMrginTop: {
    marginTop: height * 0.07
  },
  imageContainer: {
    marginTop: height * 0.10
  },
  ListContainer: {
    paddingTop: height * 0.02,
    // maxHeight: 358,
    width: '100%',
    paddingHorizontal: 30,
    marginBottom: height * 0.08

  },
  customContentTitleStyle: {

    fontFamily: 'SourceSansPro-Light',
    fontWeight: '300'

  },
  customMainTextStyle: {
    fontFamily: 'SourceSansPro-Light',
    fontWeight: '300'
  },
  customBottomTopStyle: {
    fontFamily: 'SourceSansPro-Light',
    fontWeight: '300', fontSize: 11, lineHeight: 13
  },
  customLeftContentStyle: {
    fontFamily: 'SourceSansPro-Light',
    fontWeight: '300', fontSize: 11, lineHeight: 14
  }
});


export default SubscriptionScren;