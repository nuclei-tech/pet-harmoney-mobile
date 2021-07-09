import React, { useState } from 'react';
import { Text, View, SafeAreaView, Dimensions, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { styles } from './styles';
import { Layout2, Button, ScheduleTitle } from '../../components'
import { images } from '../../constants'
import { navigate } from '../../navigation/navigation';
// Connect redux store.
import { useSelector } from 'react-redux';

const { width, height } = Dimensions.get('window');
const PractitonerTypeScren = props => {

  const { theme } = useSelector(state => state.theme);
  const { container, containee, inputContainer } = styles(props, theme);
  const [city, setCity] = useState('');
  const { btnMrginTop, imageContainer } = customStyles;

  return (
    <SafeAreaView style={container}>
      <Layout2
        type={'fullScreen'} // {halfScreen, small }
        layoutColor={theme.Theme.colors.PURPLE}
        title={'pet harmony'}
      >
        <View flex={1} style={containee}>

          <ScheduleTitle>{"Choose a practitioner type"}</ScheduleTitle>
          <View style={inputContainer}>
            <View>
              <Button title="Veterinarian" type={'outline'} boarderColor={theme.Theme.colors.WHITE} textColor={theme.Theme.colors.WHITE} buttonWidth={213} />
            </View>
            <View style={btnMrginTop}>
              <Button title="Wellness Coach" type={'outline'} boarderColor={theme.Theme.colors.WHITE} textColor={theme.Theme.colors.WHITE} buttonWidth={213} />
            </View>
          </View>
          <TouchableOpacity style={imageContainer} onPress={() => { navigate('calendar') }}>
            <Image source={images.leftArrow} />
          </TouchableOpacity>
        </View>
      </Layout2>
    </SafeAreaView>
  );
};

const customStyles = StyleSheet.create({
  btnMrginTop: {
    marginTop: height * 0.07
  },
  imageContainer: {
    marginTop: height * 0.10
  }
});


export default PractitonerTypeScren;