import { Dimensions } from 'react-native';
import { colors } from '../theme'

const Theme = {
  // Main theam colors
  colors: {
    ...colors
  },

  //font sizes 
  size: {
    HEADER_TITLE: 12,
    DETAIL_CARD_TITLE_SMALL: 11.5,
    DETAIL_CARD_TITLE: 14,
    DETAIL_CARD_HEADER_TITLE: 18,
    BUTTON: 17,

    //sizes
    BASE : 24,
    CONTAINER_PADDING:30,
    MARGIN: 8,
    PADDING:8,
  },
  //Tab
  tab: {
    TAB_BACKGROUND: colors.WHITE,
    TAB_TEXT_COLOR: colors.LIGHT_BLACK,
    INACTIVE_COLOR: colors.PINK,
    ACTIVE_COLOR: colors.PINK,
  },

  //bottomTab
  bottomIconColor: {
    darkRed: colors.RED,
    lightBlue: colors.BLUE,
    darkPurple: colors.PURPLE,
    black: colors.BLACK
  },

  //create an account
  createAccount: {
    buttonColor: colors.GREEN,
    borderColor: colors.GREEN,
    backGroundColor: colors.DARK_BLUE,
    registerTextColor: colors.DARK_BLUE,
    mainTextColor: colors.YELLOW,
    registerBackGroundColor: colors.YELLOW,
    placeHolderColor: colors.GREEN,
    mainText: {
      fontFamily: "Aqum",
      fontSize: 18,
      lineHeight: 17,
      letterSpacing: 0.2,
      color: colors.YELLOW,
    },
    buttonTextStyles: {
      fontFamily: "SourceSansPro-Black",
      fontSize: 17,
      lineHeight: 21,
      letterSpacing: 0.2,
    },
    textAlready: {
      fontFamily: "SourceSansPro-Regular",
      fontSize: 12,
      lineHeight: 15,
      color: colors.GREEN
    }
  },

  //default button style
  defaultButtonStyle: {
    textStyle: {
      fontFamily: 'Source Sans Pro',
      fontSize: 17,
      fontWeight: 'bold',
    },
    smallTextStyle: {
      fontFamily: 'Source Sans Pro',
      fontSize: 9,
      fontWeight: 'bold',
    }
  },

  //default input style
  defaultInputStyle: {
    textStyle: {
      fontFamily: "SourceSansPro-Black",
      fontWeight: 'bold',
      fontSize: 17,
    },
    boderColor: colors.GREEN,
    textColor: colors.GREEN,
    placeHolderColor: colors.GREEN,
  }
};

export default { Theme };
