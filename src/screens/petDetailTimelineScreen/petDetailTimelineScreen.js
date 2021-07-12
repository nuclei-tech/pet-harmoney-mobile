import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity, Dimensions, TouchableHighlight } from 'react-native';
import { colors, size } from '../../theme'
import { Cover, ProfilePicture, ProfileTimeline} from '../../components'
// Connect redux store.
import { useSelector } from 'react-redux';
import { Tab, TabView } from 'react-native-elements';
import { navigate } from '../../navigation/navigation';
import { images, profileHistoryData } from '../../constants';

const { height, width } = Dimensions.get('window');

const PetDetailTimelineScreen = (props) => {
  const [index, setIndex] = useState(1)
  const { theme } = useSelector(state => state.theme);

  const action = () => {
    console.log('in');
  }
  // navigate the page
  // const navigatePage = () => {
  //   navigate('LiveScreen');
  // };

  const {
    container,
    backGroundImageContainer,
    imageContainer,
    image,
    headerCustomStyle,
    proPicContainer,
    proPic,
    whitBackgroundContainer
  } = styles(theme.Theme);
  return (
    <SafeAreaView style={container}>
     <Cover
      coverImage={images.cover}
      name={'Bella Emerson'}
      description={'just a happy little pomeranian'}
      customEventStyle
     >
       <View style={{paddingHorizontal: 44}}>

       <ProfileTimeline 
        tabHistoryDetails={profileHistoryData}
        historyBtnNavigateScreen={'Pet Visit Details'}
       />
       </View>
      
     </Cover>
    </SafeAreaView>
  );
};

const styles = (theme) => StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: theme.colors.WHITE
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
    padding: theme.size.CONTAINER_PADDING
  },
  proPicContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    top: height * 0.1,
    zIndex: 2
  },
  proPic: {
    position: 'absolute',
    bottom: -(height * 10 / 100),
    borderRadius: 100,
    borderColor: theme.colors.WHITE,
    borderWidth: 4
  },
  whitBackgroundContainer: {
    width: '100%',
    height: '100%'
  }
});


export default PetDetailTimelineScreen;