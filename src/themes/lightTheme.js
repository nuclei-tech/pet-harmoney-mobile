import { Dimensions } from 'react-native';
import { colors } from './colors'

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
    BASE: 24,
    CONTAINER_PADDING: 30,
    MARGIN: 8,
    PADDING: 8,
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
      letterSpacing: 1.6,
      color: colors.YELLOW,
    },
    buttonTextStyles: {
      fontFamily: "SourceSansPro-Black",
      fontWeight: 'bold',
      fontSize: 17,
      lineHeight: 21,
      letterSpacing: 0.2,
    },
    textAlready: {
      fontFamily: "SourceSansPro-Regular",
      fontSize: 12,
      lineHeight: 15,
      color: colors.GREEN
    },
    profileText: {
      fontFamily: "SourceSansPro-Regular",
      fontSize: 12,
      lineHeight: 15,
      color: colors.WHITE
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
    textStyleBold: {
      fontFamily: "SourceSansPro-Black",
      fontWeight: 'bold',
      fontSize: 17,
    },
    textStyleError: {
      fontFamily: "SourceSansPro-Black",
      fontWeight: 'bold',
      fontSize: 12,
    },
    boderColor: colors.GREEN,
    textColor: colors.GREEN,
    placeHolderColor: colors.GREEN,
  },

  //default paragraph font family
  defaultParagraphStyles: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 14,
    lineHeight: 18,
  },

  //default paragraph card Font Styles
  defaultParagraphCardTitleStyles: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'SourceSansPro-Black',
    fontWeight: 'bold'
  },
  defaultParagraphCardTitleHomeStyles: {
    fontSize: 18,
    lineHeight: 23,
    fontFamily: 'Source Sans Pro',
    fontWeight: '700'
  },

  //default icon header font styles
  defaultIconHeaderTitleStyles: {
    fontFamily: 'SourceSansPro-Black',
    fontWeight: 'bold',
  },
  //cart list component style
  cartListStyles: {
    borderBottomColor: colors.GREY,
    description: {
      fontFamily: 'SourceSansPro-Bold',
      color: colors.BLUE,
      fontSize: 16,
      lineHeight: 19,
    },
    subDiscription: {
      fontFamily: 'SourceSansPro-Regular',
      color: colors.DARK_BLUE,
      fontSize: 11,
      lineHeight: 15,
    },
    offer: {
      fontFamily: 'SourceSansPro-Bold',
      color: colors.RED,
      fontSize: 11,
      lineHeight: 11,
    },
    change: {
      fontFamily: 'SourceSansPro-Regular',
      color: colors.DARK_BLUE,
      fontSize: 8,
      lineHeight: 11,
    },
    total: {
      fontFamily: 'SourceSansPro-Bold',
      color: colors.DARK_BLUE,
      fontSize: 14,
      lineHeight: 19,
    }
  },


  //tab icon header font styles
  tabIconHeaderFontStyles: {
    fontFamily: 'Aqum',
    // fontWeight: 'bold',
    fontSize: 6,
    lineHeight: 6,
    color: colors.WHITE
  },
  //shopping card styles
  shppoingListStyles: {
    borderBottomColor: colors.GREY,
    buttonBackGroundColor: colors.BLUE,
    buttonTextColor: colors.WHITE,
    description: {
      fontFamily: 'SourceSansPro-Bold',
      color: colors.BLUE,
      fontSize: 16,
      lineHeight: 19,
    },
    subDiscription: {
      fontFamily: 'SourceSansPro-Regular',
      color: colors.DARK_BLUE,
      fontSize: 11,
      lineHeight: 15,
    },
    rating: {
      fontFamily: 'SourceSansPro-Light',
      color: colors.DARK_BLUE,
      fontSize: 11,
      lineHeight: 14,
    },
    change: {
      fontFamily: 'SourceSansPro-Regular',
      color: colors.DARK_BLUE,
      fontSize: 8,
      lineHeight: 11,
    },
    total: {
      fontFamily: 'SourceSansPro-Bold',
      color: colors.DARK_BLUE,
      fontSize: 13,
      lineHeight: 15,
    }
  },


  //subscription card
  subscriptionCard: {
    borderColor: colors.WHITE,
    backgroundColor: colors.LIGHT_PURPLE,
    fontColor: colors.WHITE,
    mainTextStyle: {
      fontFamily: 'SourceSansPro-Regular',
      fontSize: 14,
      color: colors.WHITE,
      lineHeight: 18,
    },
    contentTitleStyle: {
      fontFamily: 'SourceSansPro-Bold',
      fontSize: 20,
      lineHeight: 25,
      color: colors.WHITE,
    },
    leftContentStyle: {
      fontFamily: 'SourceSansPro-Bold',
      fontSize: 11,
      lineHeight: 14,
      color: colors.WHITE,
    },
    rightTopStyle: {
      fontFamily: 'SourceSansPro-Bold',
      fontSize: 18,
      lineHeight: 23,
      color: colors.WHITE,
    },
    rightBottomStyle: {
      fontFamily: 'SourceSansPro-bold',
      fontSize: 14,
      color: colors.WHITE,
    },
  },


  //secondary Top Title Header Font Styles
    secondaryTopStylesMainText: {
        fontFamily: 'Aqum',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 12,
        letterSpacing: 3.2,
        color: colors.WHITE,
    },
    secondaryTopStylesSecondaryText: {
        fontFamily: 'Aqum',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 15,
        letterSpacing: 3.2,
        color: colors.WHITE,
    },

    //credit card scanner fonst and colors
    titleStyles: {
      fontFamily: 'SourceSansPro-Regular',
        fontSize: 16,
        fontWeight: '300',
        lineHeight: 20,
        color: colors.WHITE,
    },
    cardTitle: {
      fontFamily: 'Source Sans Pro',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 18,
        color: colors.WHITE
    },

  //search filed style
  searchFieldStyle: {
    textStyle: {
      fontFamily: "SourceSansPro-Black",
      fontWeight: 'bold',
      fontSize: 15,
    },
    listTextField: {
      fontFamily: "SourceSansPro-Regular",
      fontSize: 12,
    },
    boderColor: colors.DARK_BLUE,
    textColor: colors.GREEN,
    placeHolderColor: colors.GREEN,
  },

  //box field style
  boxFieldStyle: {
    textStyle: {
      fontFamily: 'SourceSansPro-Bold',
      fontSize: 14,
      lineHeight: 18,
      color: colors.GREEN,
    }
  },


  //forgot email screen
  forgotEmail: {
    forgotTextStyles: {
      fontFamily: 'SourceSansPro-Regular',
      fontSize: 16,
      lineHeight: 20,
      color: colors.YELLOW
    }
  },

  //otp screen
  forgotOtp: {
    forgotOtpText: {
      fontFamily: 'SourceSansPro-Regular',
      fontSize: 16,
      lineHeight: 20,
      color: colors.YELLOW
    }
  },

  //register subscription
  regSubscription: {
    subTextStyle: {
      fontFamily: 'SourceSansPro-Bold',
      color: colors.WHITE,
      fontSize: 20,
      lineHeight: 25,
    },
    subTextValue: {
      fontFamily: 'SourceSansPro-Regular',
      color: colors.WHITE,
      fontSize: 64,
      lineHeight: 80,
    },
    payTextStyle: {
      fontFamily: 'SourceSansPro-Bold',
      color: colors.WHITE,
      fontSize: 20,
      lineHeight: 25,
    }
  },

  //subscription selected screen
  selectSubscription: {
    payTextStyle: {
      fontFamily: 'SourceSansPro-Regular',
      color: colors.WHITE,
      fontSize: 16,
      lineHeight: 20,
    }
  },

  //reminder session screen
  reminderSession:{
    profileText:{
      fontFamily: 'SourceSansPro-Bold',
      color: colors.WHITE,
      fontSize: 26,
      lineHeight: 31,
    },
    dayText:{
      fontFamily: 'SourceSansPro-Light',
      color: colors.BLUE,
      fontSize: 64,
      lineHeight: 76,
    },
    timeText:{
      fontFamily: 'SourceSansPro-Bold',
      color: colors.BLUE,
      fontSize: 20,
      lineHeight: 25,
    },
    testAudVid:{
      fontFamily: 'SourceSansPro-Regular',
      color: colors.BLUE,
      fontSize: 12,
      lineHeight: 15,
    },
    remiderProfileText:{
      fontFamily: 'SourceSansPro-Bold',
      color: colors.YELLOW,
      fontSize: 24,
      lineHeight: 28,
    },
    remindAddContent:{
      fontFamily: 'SourceSansPro-Bold',
      color: colors.YELLOW,
      fontSize: 16,
      lineHeight: 20,
    }
  },

  //my cart screens
  myCard:{
    profileTextStyle:{
      fontFamily: 'SourceSansPro-Bold',
      color: colors.DARK_BLUE,
      fontSize: 18,
      lineHeight: 21,
    },
    subTotalText:{
      fontFamily: 'SourceSansPro-Bold',
      color: colors.DARK_BLUE,
      fontSize: 12,
      lineHeight: 14,
    },
    subPriceText:{
      fontFamily: 'SourceSansPro-Light',
      color: colors.DARK_BLUE,
      fontSize: 22,
      lineHeight: 24,
    },
    customTextStyle:{
      fontSize: 14,
    },
    orderText:{
      fontFamily: 'SourceSansPro-Bold',
      color: colors.DARK_BLUE,
      fontSize: 14,
      lineHeight: 18,
    }
  },

  //shopping
  shoppoing:{
    topContainText:{
      fontFamily: 'SourceSansPro-Bold',
      color: colors.DARK_BLUE,
      fontSize: 18,
      lineHeight: 21
    }
  },

  // my pet tab font styles
  myPetTabFontStyles: {
    fontFamily: 'Source Sans Pro',
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 20,
    color: colors.WHITE
  },
  myPetTitleFonStyles: {
    fontFamily: 'Source Sans Pro',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 25,
        alignSelf: 'center',
        color: colors.WHITE,
  }
};

export default { Theme };
