import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { colors, size } from '../../theme'
import { Button, Header, ReminderButton, Layout2 } from '../../components'
// Connect redux store.
import { useSelector } from 'react-redux';
;
import { navigate } from '../../navigation/navigation';
import { images } from '../../constants';

const ComunityScreen = props => {
  const { theme } = useSelector(state => state.theme);
  const action = () => {
    console.log('in');
  }
  // navigate the page
  // const navigatePage = () => {
  //   navigate('LiveScreen');
  // };
  const window = Dimensions.get('window');
  const Label = (props) => {
    return (
      <View>
        <Header title='PET HARMONY' headerColor={'transparent'} />
        <Text>From parent</Text>
        <Text>From parent</Text>
        <Text>From parent</Text>
        <Text>From parent</Text>

      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <View flex={1} style={{ justifyContent: 'space-between' }}>
        <TouchableOpacity  flex={0.6} style={{ position: 'absolute', width: '100%' }} >
          <Image resizeMode='stretch' source={images.cover} style={{ width: '100%' }} />
        </TouchableOpacity>
        <Header  title='PET HARMONY' headerColor={'transparent'} customStyle={{ padding: size.SIZE.BASE }} />
        <View flex={0.4} style={{ alignItems: 'center' }}>
          <Image source={images.profile} style={{ position:'absolute', top:window.height*0.2/100 ,borderRadius: 100, borderColor: colors.WHITE, borderWidth: 4, zIndex: 1 }} />
        </View>
      </View>

      <View flex={3}  >
        <ImageBackground  resizeMode='stretch' source={images.bgWhite} style={{ width: '100%', height: '100%' }}>
          <View>
            {/* <Text>gggggggggggg</Text> */}
          </View>
        </ImageBackground>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: colors.RED,
    // flexDirection:"column"
  },
});


export default ComunityScreen;