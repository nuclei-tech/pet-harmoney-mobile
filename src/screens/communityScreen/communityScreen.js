import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ImageBackground, TouchableOpacity, Dimensions, TouchableHighlight } from 'react-native';
import { colors, size } from '../../theme'
import { Layout2, SecondaryTopTitleHeader, Header, IconTabHeader, DetailList} from '../../components'
// Connect redux store.
import { useSelector } from 'react-redux';
import { Tab, TabView } from 'react-native-elements';
import { navigate } from '../../navigation/navigation';
import { images, profileHistoryData, iconTabDetails, sessionDetails } from '../../constants';

const { height, width } = Dimensions.get('window');

const ComunityScreen = (props) => {
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
      <SecondaryTopTitleHeader backgroundCustomColor={theme.Theme.colors.BLUE} withDefultHeader />
      <Layout2
            type={'fullScreen'}
            layoutColor={theme.Theme.colors.BLUE}
            noHeader
            
        >
          <View style={{paddingHorizontal: 20}}>

          <IconTabHeader 
            tabDetails={iconTabDetails}
            containerMarginTop={31}
            containerMarginBottom={35}
            />
          <DetailList 
            backgroundColor={theme.Theme.colors.BLUE}
            titleColor={theme.Theme.colors.GREEN}
            descriptionColor={theme.Theme.colors.WHITE}
            borderBottomColor={theme.Theme.colors.WHITE}
            headerTitle={'Upcoming Sessions'}
            headerTitleColor={theme.Theme.colors.WHITE}
            dataList={sessionDetails}
            listButtonExist
            listBtnColor={theme.Theme.colors.GREEN}
            listBtnTitle={'Start Session'}
            listBtnTxtColor={theme.Theme.colors.DARK_BLUE}
            customListItemContainerStyle={{
              paddingVertical: 0,
              paddingLeft: 30,
              paddingRight: 10
            }}
            customListMainContainerStyles={{
              marginTop: 13,
            }}
            customHeaderTitleStyle={{
              fontFamily: 'Source Sans Pro',
              fontWeight: '700',
              fontSize: 18,
              lineHeight: 21.37
            }}
            customListButtonTextStyles={{
              fontFamily: 'Source Sans Pro',
              fontWeight: '700',
              fontSize: 9,
              lineHeight: 11
            }}
            customListButtonContainerStyles={{
              width: 73,
              height: 19
            }}
            />

</View>
        </Layout2>
    </SafeAreaView>
  );
};

const styles = (theme) => StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: theme.colors.WHITE,
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


export default ComunityScreen;
