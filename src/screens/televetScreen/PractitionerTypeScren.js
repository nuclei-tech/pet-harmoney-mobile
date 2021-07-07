import React, { useState } from 'react';
import { Text, View, SafeAreaView, Dimensions, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { Layout2, Button, ScheduleTitle } from '../../components'
import { images } from '../../constants'
import { navigate } from '../../navigation/navigation';
// Connect redux store.
import { useSelector } from 'react-redux';

const { width, height } = Dimensions.get('window');
const PractitonerTypeScren = props => {
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
          <View style={{ marginTop: height * 0.04 }}>
            <View>
              <Button title="Veterinarian" type={'outline'} boarderColor={theme.Theme.colors.WHITE} textColor={theme.Theme.colors.WHITE} buttonWidth={213} />
            </View>
            <View style={{ marginTop: height * 0.07 }}>
              <Button title="Wellness Coach" type={'outline'} boarderColor={theme.Theme.colors.WHITE} textColor={theme.Theme.colors.WHITE} buttonWidth={213} />
            </View>
          </View>
          <TouchableOpacity style={{ marginTop: height * 0.10 }} onPress={() => { navigate('calendar') }}>
            <Image source={images.leftArrow} />
          </TouchableOpacity>
        </View>
      </Layout2>
    </SafeAreaView>
  );
};



export default PractitonerTypeScren;