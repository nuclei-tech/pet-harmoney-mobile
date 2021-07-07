import React, { useState } from 'react';
import { Text, View, SafeAreaView, Dimensions, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { Layout2, InputField, ScheduleTitle } from '../../components'
import { images } from '../../constants'
// Connect redux store.
import { useSelector } from 'react-redux';
import { navigate } from '../../navigation/navigation';

const { width, height } = Dimensions.get('window');
const TelevetScreen = props => {
  const { theme } = useSelector(state => state.theme);
  const { container } = styles(props, theme);
  const [city, setCity] = useState('')
  return (
    <SafeAreaView style={container}>
      <Layout2
        type={'fullScreen'} // {halfScreen, small }
        layoutColor={theme.Theme.colors.PURPLE}
        headerTitle={'pet harmony'}
      >
        <View flex={1} style={{ alignItems: "center", paddingTop: height * 0.05 }}>

          <ScheduleTitle>{"Location"}</ScheduleTitle>
          <View style={{marginTop: height*0.04}}>
            <InputField
              customMainContanier={{ backgroundColor: theme.Theme.colors.PURPLE, borderColor: '#ffffff', width: 213, height:41 }}
              placeholderColor={theme.Theme.colors.WHITE}
              placeholder={'City'}
              required={true}
              value={city}
              requireMessage={'City is required'}
              onChangeText={text => setCity(text)}
            />
          </View>
          <TouchableOpacity style={{marginTop:height*0.22}} onPress={()=>{navigate('practitionerType')}}>
            <Image source={images.leftArrow}/>
          </TouchableOpacity>
        </View>
      </Layout2>
    </SafeAreaView>
  );
};



export default TelevetScreen;