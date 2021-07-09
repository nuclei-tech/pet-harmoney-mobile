import React, { useState } from 'react';
import { Text, View, SafeAreaView, Dimensions, StyleSheet, Image } from 'react-native';
import { styles } from './styles';
import { Layout2, Calendar, ScheduleTitle } from '../../components'
import { images } from '../../constants'
// Connect redux store.
import { useSelector } from 'react-redux';
import { navigate } from '../../navigation/navigation';

const { width, height } = Dimensions.get('window');

const CalenderScreen = props => {
  const { theme } = useSelector(state => state.theme);
  const { container, description } = styles(props, theme);

  const {marginTop} = customStyles;
  return (
    <SafeAreaView style={container}>
      <Layout2
        type={'fullScreen'} // {halfScreen, small }
        layoutColor={theme.Theme.colors.PURPLE}
        title={'pet harmony'}
      >
        <View style={marginTop}>
          <ScheduleTitle>Schedule a virtual session</ScheduleTitle>
          <Text style={description}>Click on the solid dates to book an appointment</Text>
        </View>
        <Calendar />
      </Layout2>
    </SafeAreaView>
  );
};

const customStyles = StyleSheet.create({
  marginTop:{
    marginTop:height*0.06
  }
});

export default CalenderScreen;
