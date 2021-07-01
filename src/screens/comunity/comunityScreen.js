import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity, Dimensions, TouchableHighlight } from 'react-native';
import { colors, size } from '../../theme'
import { Button, Header, ReminderButton, ProfilePicture } from '../../components'
// Connect redux store.
import { useSelector } from 'react-redux';
import { navigate } from '../../navigation/navigation';
import { images } from '../../constants';

const window = Dimensions.get('window');
const ComunityScreen = props => {
  const { theme } = useSelector(state => state.theme);
  const action = () => {
    console.log('in');
  }
  // navigate the page
  // const navigatePage = () => {
  //   navigate('LiveScreen');
  // };


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
  const changeProfileImage = () => {
    console.log('in');
  }

  const {
    container,
    backGroundImageContainer,
    imageContainer,
    image,
    headerCustomStyle,
    proPicContainer,
    proPic,
    whitBackgroundContainer
  } = styles;
  return (
    <SafeAreaView style={container}>
      <View flex={1} style={backGroundImageContainer}>
        <TouchableHighlight onPress={changeProfileImage} flex={0.6} style={imageContainer} >
          <Image resizeMode='stretch' source={images.cover} style={image} />
        </TouchableHighlight>
        <Header title='PET HARMONY' headerColor={'transparent'} customStyle={headerCustomStyle} />
        <View onPress={changeProfileImage} flex={0.4} style={proPicContainer}>
          <ProfilePicture source={images.profile}  />
        </View>
      </View>

      <View flex={3} >
        <ImageBackground resizeMode='stretch' source={images.bgWhite} style={whitBackgroundContainer}>
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
    backgroundColor: colors.WHITE
  },
  backGroundImageContainer: {
    justifyContent: 'space-between'
  },
  imageContainer: {
    position: 'absolute',
    width: '100%'
  },
  image: {
    width: '100%'
  },
  headerCustomStyle: {
    padding: size.SIZE.CONTAINER_PADDING
  },
  proPicContainer: {
    alignItems: 'center',
    zIndex: 2
  },
  proPic: {
    position: 'absolute',
    bottom: -(window.height * 10 / 100), 
    borderRadius: 100,
    borderColor: colors.WHITE,
    borderWidth: 4
  },
  whitBackgroundContainer:{ 
    width: '100%',
    height: '100%' }
});


export default ComunityScreen;