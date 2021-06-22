import {Dimensions} from 'react-native';

const Theme = {
  //Default style
  name: 'light-theme',
  background: '#ffffff',
  baseWapperPadding: 15,
  baseWapperHeight: '100%',
  backGoundTheme: {
    backgroundColor: '#ffffff',
  },
  inputErrorStyle: {
    fontFamily: 'Lato-Bold',
    fontSize: 12,
  },
  colors: {
    silver: '#c1c1c1',
  },
  //Home
  Home: {
    title: {
      fontFamily: 'Lato-Bold',
      fontSize: 18,
      marginVertical: 15,
    },
  },
  //Popover
  popover: {
    TEXT_COLOR: '#525252',
    BACKGROUND_COLOR: '#ececec',
    BORDER_COLOR: '#FF01B4',
    DARKGRAY: '#cbc5c5',
  },
  //BottomTab
  BottomTab: {
    forceFont: {
      fontFamily: 'Lato-Bold',
      color: '#FF01B4',
    },
    normalFont: {
      fontFamily: 'Lato-Light',
    },
  },
  //LiveScreen
  LiveScreen: {
    iconColor: '#FF01B4',
    contentFont: {
      fontFamily: 'Lato-Bold',
      fontSize: 16,
      letterSpacing: 0.9,
      color: '#FF01B4',
    },
  },
  //videoList
  videoList: {
    videoContanier: {
      backgroundColor: '#f5f5f5',
      padding: 20,
      borderRadius: 5,
    },
    liveTitle: {
      fontFamily: 'Lato-Heavy',
      fontSize: 10,
      color: '#e31221',
    },
    liveFont: {
      fontFamily: 'Lato-Heavy',
      fontSize: 10,
      color: '#ffffff',
    },
    liveDone: {
      fontFamily: 'Lato-Heavy',
      fontSize: 10,
      color: '#19623b',
    },
    liveCount: {
      fontFamily: 'Lato-Medium',
      fontSize: 10,
      color: '#878787',
    },
    fontDiscription: {
      fontFamily: 'Lato-Medium',
      fontSize: 14,
      color: '#2f2f2f',
    },
    fontSubDiscription: {
      marginTop: 10,
      fontFamily: 'Lato-Light',
      fontSize: 10,
      color: '#888888',
    },
    fontTime: {
      fontFamily: 'Lato-Light',
      fontSize: 10,
      color: '#888888',
      marginRight: 5,
    },
    fontDuration: {
      fontFamily: 'Lato-Bold',
      fontSize: 10,
      color: '#ffffff',
      // marginRight:3
    },
    titleCustom: {
      color: '#061A4B',
    },
    mainTitle: {
      fontFamily: 'Lato-Semibold',
      fontSize: 12,
      color: '#888888',
      marginBottom: 15,
    },
  },
  //VideoPlay
  videoPlay: {
    subTitleLikeBtn: {
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      color: '#474747',
      fontFamily: 'Lato-Regular',
      fontWeight: 'bold',
      paddingHorizontal: 5,
      paddingTop: 5,
      paddingBottom: 5,
      backgroundColor: 'rgba(0,0,0,0.3)',
      overflow: 'hidden',
      borderRadius: 5,
    },
    subTitle: {
      color: '#474747',
      fontFamily: 'Lato-Regular',
      fontSize: 18,
      fontWeight: 'bold',
      paddingHorizontal: 5,
      backgroundColor: '#FF01B4',
      alignSelf: 'flex-start',
      marginLeft: 22,
      overflow: 'hidden',
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    liveContentView: {
      fontFamily: 'Lato-Medium',
      color: '#ffffff',
    },
    liveContentViewLikeBtn: {
      fontFamily: 'Lato-Medium',
      color: '#ffffff',
    },
    videoTitle: {
      fontFamily: 'Lato-Medium',
      color: '#2f2f2f',
      fontSize: 22,
      marginLeft: 8,
      letterSpacing: 0.8,
    },
    videoSubTitle: {
      fontFamily: 'Lato-Medium',
      color: '#888888',
      fontSize: 15,
      letterSpacing: 0.8,
      marginVertical: 2,
    },
    videoOwner: {
      fontFamily: 'Lato-Light',
      color: '#888888',
      fontSize: 11,
      letterSpacing: 0.8,
    },
    videoOwnerName: {
      fontFamily: 'Lato-Light',
      color: '#FF01B4',
      fontSize: 11,
      letterSpacing: 0.8,
    },
    followButtonText: {
      fontFamily: 'Lato-Medium',
      color: '#ffffff',
    },
  },
  //StreamerRequestForm
  StreamingRequest: {
    iconColor: '#061A4B',
    boxTitle: {
      fontFamily: 'Lato-Medium',
      color: '#9f9d9d',
      fontSize: 14,
      letterSpacing: 0.8,
    },
    mainTextHeader: {
      fontFamily: 'Lato-Heavy',
      color: '#140707',
      fontSize: 27,
    },
    title: {
      fontFamily: 'Lato-Bold',
      color: '#121111',
      fontSize: 18,
    },
    customPlaceHolder: {
      fontFamily: 'Lato-Bold',
      fontSize: 16,
      height: 50,
      paddingHorizontal: 0,
      color: '#484848',
    },
  },
  //StreamerView
  StreamViewer: {
    dotColor: '#2cb345',
    titleColor: '#2f2f2f',
    mainColor: '#FF01B4',
    mapheight: (Dimensions.get('window').height / 3) * 1.2,
    MainText: {
      fontFamily: 'Lato-Bold',
      fontSize: 14,
      color: '#130707',
      letterSpacing: 1,
    },
    subMainText: {
      fontFamily: 'Lato-Heavy',
      fontSize: 18,
      color: '#130707',
      letterSpacing: 1,
    },
    subText: {
      fontFamily: 'Lato-Bold',
      fontSize: 7,
      color: '#2250d9',
      letterSpacing: 1,
    },
    streamTitle: {
      fontFamily: 'Lato-Medium',
      fontSize: 13,
      color: '#2f2f2f',
      marginVertical: 2,
    },
    streamSubTitle: {
      fontFamily: 'Lato-Medium',
      fontSize: 9,
      color: '#434343',
      marginVertical: 2,
    },
    switchTrueColor: '#2cb345',
    switchFalseColor: '#767577',
    thumbColor: '#f4f3f4',
  },
  //my details layout
  myDetailsLayout: {
    headerText: {
      fontFamily: 'Lato-Heavy',
      fontSize: 18,
      color: '#130707',
      letterSpacing: 1,
    },
    iconColor: '#989898',
  },

  //Video Carosal
  videoCarosal: {
    fontColor: '#ffffff',
    iconColor: 'rgba(210, 219, 193, 0.5)',
    iconDarkColor: 'rgb(210, 219, 193)',
    text: {
      color: '#ffffff',
      fontFamily: 'Lato-Bold',
      fontSize: 30,
    },
    subTitle: {
      color: '#ffffff',
      fontFamily: 'Lato-Regular',
      fontSize: 18,
    },
  },
  //User Profile
  userProfile: {
    backgroundColor: '#ececec',
    fontColor: '#474747',
    backgroundColorPopover: '#4B5D6B',
    mainTextheader: {
      fontFamily: 'Lato-Medium',
      fontSize: 23,
      letterSpacing: 1.5,
      color: '#130707',
    },
    hourCount: {
      fontFamily: 'Lato-Medium',
      fontSize: 15,
      color: '#FF01B4',
    },
    popOverItem: {
      fontFamily: 'Lato-Medium',
      fontSize: 15,
      color: '#ffffff',
    },
    goLiveText: {
      fontFamily: 'Lato-Bold',
      color: '#ffffff',
      fontSize: 20,
      letterSpacing: 1,
    },
    profileVideosText: {
      fontFamily: 'Lato-Semibold',
      // color: '#ffffff',
      fontSize: 20,
      letterSpacing: 0.5,
    },
    mainText: {
      fontFamily: 'Lato-Semibold',
      fontSize: 16,
      letterSpacing: 1.5,
      color: '#201414',
    },
    subText: {
      fontFamily: 'Lato-Medium',
      fontSize: 14,
      letterSpacing: 1.5,
      color: '#484848',
    },
    subDate: {
      fontFamily: 'Lato-Medium',
      fontSize: 7,
      letterSpacing: 1.5,
      color: '#8f8e8e',
    },
    customPlaceholder: {
      fontFamily: 'Lato-Regular',
      fontSize: 14,
      color: '#c1c1c1',
      letterSpacing: 1,
    },
  },
  //Video tile
  videoTile: {
    statusColors: {
      pending: '#f07919',
      rejected: '#747474',
      accepted: '#3b7bdb',
      live: '#f5284a',
      done: '#19623b',
      new: '#8b2dd4',
      waiting: '#d0bd1f',
      expired: '#800000',
      borderColor: '#d5d5d5',
    },
    statusText: {
      fontFamily: 'Lato-Bold',
      fontSize: 11,
      letterSpacing: 1,
      marginHorizontal: 10,
    },
    mainText: {
      fontFamily: 'Lato-Medium',
      fontSize: 16,
      letterSpacing: 1,
      color: '#130707',
      marginBottom: 10,
    },
    subText: {
      fontFamily: 'Lato-Medium',
      fontSize: 11,
      letterSpacing: 1,
      color: '#7b7b7b',
      //marginVertical: 2,
      marginBottom: 15,
    },
    subTime: {
      fontFamily: 'Lato-Medium',
      fontSize: 11,
      letterSpacing: 1,
      color: '#7b7b7b',
      //marginVertical: 2,
      marginBottom: 8,
    },
    iconColor: {
      color: '#7b7b7b',
    },
    subDate: {
      fontFamily: 'Lato-Medium',
      fontSize: 10,
      letterSpacing: 1,
      color: '#7b7b7b',
    },
  },
  // status Colors
  //Tab
  tab: {
    TAB_BACKGROUND: '#ffffff',
    TAB_TEXT_COLOR: '#636363',
    INACTIVE_COLOR: '#FF01B4',
    ACTIVE_COLOR: '#FF01B4',
  },
  //Button style
  button: {
    RED_BUTTON_COLOR: 'red',
    YELLOW_BUTTON_COLOR: 'yellow',
    PURPLE_BUTTON_COLOR: 'purple',
    GREEN_BUTTON_COLOR: 'green',
    BLUE_BUTTON_COLOR: '#FF01B4',
    ORAGNE_BUTTON_COLOR: 'orange',
    DEFAULT_BLACK: '#000000',
    BOTTOM_BORDER_ON_FOCUS_COLOR: '#061A4B',
    buttonDefaultStyle: {
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#FF01B4',
      backgroundColor: '#FF01B4',
      justifyContent: 'center',
      alignItems: 'center',
      //margin: 3,
      paddingHorizontal: 20,
      paddingTop: 12,
      paddingBottom: 12,
    },
    buttonDesabletyle: {
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#FF01B4',
      backgroundColor: '#FF01B4',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 3,
      paddingHorizontal: 20,
      paddingTop: 12,
      paddingBottom: 12,
      opacity: 0.4,
    },
    small: {
      fontsize: '',
      padding: '',
      bgColor: '',
      borderColor: '',
    },
    medium: {
      fontFamily: 'Lato-Bold',
      fontSize: 15,
      letterSpacing: 2,
    },
    large: {
      fontsize: '',
      padding: '',
      bgColor: '',
      borderColor: '',
    },
  },
  //Text color
  textField: {
    textColor: {
      BLACK: 'black',
      WHITE: '#ffffff',
      SILVER: '#c1c1c1',
      ERROR_TEXT_COLOR: 'red',
      INPUT_BG_COLOR: '#ffffff',
      INPUT_BORDER_COLOR: '#7b7b7b',
      LIGHT_GRAY: '#140707',
      PLACEHOLDER_COLOR: '#484848',
      DARK_LIGHT_GRAY: '#484848',
      ICON_COLOR: '#8f929a',
    },
    input_lable_text: {
      fontFamily: 'Lato-Regular',
      fontSize: 12,
      color: '#616161',
      paddingBottom: 0,
    },
    input_lable_text_main: {
      fontFamily: 'Lato-Bold',
      fontSize: 15,
      color: '#616161',
      paddingBottom: 0,
    },
    input_placeholder_text: {
      fontFamily: 'Lato-Regular',
      fontSize: 14,
      color: '#c1c1c1',
      letterSpacing: 0.96,
    },
  },
  //Register Modal style
  registerModal: {
    mainContanier: {
      justifyContent: 'center',
      flex: 1,
      width: (Dimensions.get('window').width / 100) * 65,
    },
    mainHeader: {
      fontFamily: 'Lato-Heavy',
      fontSize: 27,
      letterSpacing: 0.96,
      color: '#140707',
    },
    subHeader: {
      fontFamily: 'Lato-Medium',
      fontSize: 13,
      color: '#616161',
      letterSpacing: 0.96,
    },
  },
  //Map style
  map: {
    colors: {
      LIGHT_GRAY: '#b6b6b6',
      WHITE: 'rgba(255,255,255,0.9)',
      LIGHTBLUE: '#5375da',
      TEXT_COLOR: '#c1c1c1',
      BORDER_COLOR: '#c1c1c1',
      BACKGROUND_COLOR: '#d5d5d5',
      ICON_COLOR: '#585353',
      ICON_COLOR_ACTIVE: '#FF01B4',
    },
    mainHeader: {
      fontFamily: 'Lato-Heavy',
      fontSize: 18,
      letterSpacing: 0.96,
      color: '#130707',
    },
    subHeader: {
      fontFamily: 'Lato-Medium',
      fontSize: 11,
      color: '#919191',
      letterSpacing: 0.6,
    },
    title: {
      fontFamily: 'Lato-Bold',
      fontSize: 20,
      letterSpacing: 0.8,
    },
    titleModal: {
      fontFamily: 'Lato-Bold',
      fontSize: 25,
      letterSpacing: 0.8,
      marginBottom: 20,
    },
    otherText: {
      fontFamily: 'Lato-Medium',
      fontSize: 12,
      letterSpacing: 0.8,
      color: '#585353',
    },
    textDone: {
      fontFamily: 'Lato-Medium',
      fontSize: 12,
      letterSpacing: 0.8,
      color: '#061A4B',
    },
    textLive: {
      fontFamily: 'Lato-Medium',
      fontSize: 12,
      letterSpacing: 0.8,
      color: '#FF01B4',
    },
    timeText: {
      fontFamily: 'Lato-Medium',
      fontSize: 12,
      letterSpacing: 0.8,
      color: '#585353',
    },
  },
  //Modal style
  modal: {
    MODAL_BG_COLOR: '#rgba(0,0,0,0.9)',
    MODAL_BG_COLOR_LIGHT: '#rgba(0,0,0,0.4)',
    MODAL_CONTENT_COLOR: '#ffffff',
    MODAL_BORDER_COLOR: '#777777',
  },
  //Icon style
  icons: {
    fontSize: 16,
    color: '',
  },
  //Alert style
  alert: {
    warning: {
      fontsize: '',
      padding: '',
      bgColor: '',
      borderColor: '',
    },
    error: {
      fontsize: '',
      padding: '',
      bgColor: '',
      borderColor: '',
    },
    info: {
      fontsize: '',
      padding: '',
      bgColor: '',
      borderColor: '',
    },
  },
  //Live stream screen styles
  mainStyles: {
    LIVE_STREAM_START_BTN_COLOR: '#ffffff',
    LIVE_STREAM_STOP_BTN_COLOR: '#19c443',
    HEADER_LIVE_TEXT_COLOR: '#de5454',
    header: {
      fontFamily: 'Lato-Bold',
      fontSize: 17,
      color: '#6d6d6d',
      letterSpacing: 0.5,
    },
    subHeaderName: {
      fontFamily: 'Lato-Bold',
      fontSize: 11,
      color: '#616161',
      letterSpacing: 0.5,
    },
    subHeaderVenue: {
      fontFamily: 'Lato-Bold',
      fontSize: 12,
      color: '#acacac',
      letterSpacing: 0.5,
    },
  },
};

export default {Theme};
