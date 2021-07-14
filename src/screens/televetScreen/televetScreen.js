import React, { useState } from 'react';
import { Text, View, SafeAreaView, Dimensions, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { styles } from './styles';
import { Layout2, InputField, ScheduleTitle, LocationSearch } from '../../components'
import { images } from '../../constants'
// Connect redux store.
import { useSelector } from 'react-redux';
import { navigate } from '../../navigation/navigation';

const { width, height } = Dimensions.get('window');
const TelevetScreen = props => {
  const { theme } = useSelector(state => state.theme);
  const { container, containee, inputContainer,textStyle } = styles(props, theme);
  const [city, setCity] = useState('')
  const {btnMrginTop} = customStyles;
  return (
    <SafeAreaView style={container}>
      <Layout2
        type={'fullScreen'} // {halfScreen, small }
        layoutColor={theme.Theme.colors.PURPLE}
        title={'pet harmony'}
      >
        <View flex={1} style={containee}>

          <ScheduleTitle>{"Location"}</ScheduleTitle>
          {/* <LocationSearch/> */}
          <View style={inputContainer}>
            <InputField
              customMainContanier={textStyle}
              placeholderColor={theme.Theme.colors.WHITE}
              placeholder={'City'}
              required={true}
              value={city}
              requireMessage={'City is required'}
              onChangeText={text => setCity(text)}
            />
          </View>
          <TouchableOpacity style={btnMrginTop} onPress={()=>{navigate('practitionerType')}}>
            <Image source={images.leftArrow}/>
          </TouchableOpacity>
        </View>
      </Layout2>
    </SafeAreaView>
  );
};


const customStyles = StyleSheet.create({
  btnMrginTop:{
    marginTop:height*0.22
  }
});
export default TelevetScreen;