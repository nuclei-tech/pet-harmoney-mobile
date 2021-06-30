import {Dimensions} from 'react-native';

const Theme = {

  //Tab
  tab: {
    TAB_BACKGROUND: '#ffffff',
    TAB_TEXT_COLOR: '#636363',
    INACTIVE_COLOR: '#FF01B4',
    ACTIVE_COLOR: '#FF01B4',
  },

  //bottomTab
  bottomIconColor:{
    darkRed:'#FF6A64',
    lightBlue:'#3176FF',
    darkPurple:'#6732C8',
    black:'#000000'
  },

  //create an account
  createAccount:{
    buttonColor:'#46E4C1',
    borderColor:'#46E4C1',
    backGroundColor:'#0F1E51',
    registerTextColor:'#0F1E51',
    mainTextColor:'#FFCA27',
    registerBackGroundColor:"#FFCA27",
    placeHolderColor:"#46E4C1",
    mainText: {
      fontFamily: "Aqum",
      fontSize: 18,
      lineHeight: 17,
      letterSpacing: 0.2,
      color:"#FFCA27",
    },
    buttonTextStyles:{
      fontFamily: "SourceSansPro-Black",
      fontSize: 17,
      lineHeight: 21,
      letterSpacing: 0.2,
    },
    textAlready:{
      fontFamily: "SourceSansPro-Regular",
      fontSize: 12,
      lineHeight: 15,
      color:'#46E4C1'
    }
  },

  //default button style
  defaultButtonStyle:{
    textStyle: {
      fontFamily: 'Source Sans Pro',
      fontSize: 17,
      fontWeight:'bold',
    },
    smallTextStyle: {
      fontFamily: 'Source Sans Pro',
      fontSize: 9,
      fontWeight:'bold',
    }
  },

   //default input style
   defaultInputStyle:{
    textStyle: {
      fontFamily: "SourceSansPro-Black",
      fontWeight:'bold',
      fontSize: 17,
    },
    boderColor:'#46E4C1',
    textColor:'#46E4C1',
    placeHolderColor:"#46E4C1",
  }
};

export default {Theme};
