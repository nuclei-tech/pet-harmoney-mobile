import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window')


export const styles = props =>
  StyleSheet.create({
    container: {
      flex: 1
    },
    mainText: {
      ...props.Theme.createAccount.mainText,
      marginTop: 31,
      marginBottom: 31,
    },
    buttonStyle: {
      borderWidth: 4
    },
    buttonTextStyle: {
      ...props.Theme.createAccount.buttonTextStyles,
      color: props.Theme.createAccount.borderColor,
    },
    registerButtonStyle: {
      borderColor: props.Theme.createAccount.registerBackGroundColor,
      borderWidth: 4
    },
    buttonRegisterStyle: {
      ...props.Theme.createAccount.buttonTextStyles,
    },
    textAlready: {
      ...props.Theme.createAccount.textAlready,
      marginTop: 4
    },
    viewFillContain: {
      width: '100%'
    },

    //Pet Register Style
    mediumContanierStyle: {
      marginHorizontal: (Dimensions.get('window').width / 100 * 15) - 30,
      marginTop: height * 0.04,
    },
    profileText: {
      ...props.Theme.createAccount.profileText,
      paddingTop: 14.5,
      paddingBottom: 5.5,
      paddingHorizontal: width / 100 * 22,
      textAlign: 'center'

    },
    flexRowMain: {
      flex: 16,
      flexDirection: 'row'
    },
    colorField: {
      flex: 7,
      marginLeft: 7
    },
    breedContanier:{
      flex: 9
    },
    genderContanier:{
      flex: 7
    },
    spayContanier:{
      flex: 9, 
      marginLeft: 7 
    },
    addButtonContanier:{
      alignItems: 'center', 
      paddingBottom: 15
    },
    imageStyle:{
      borderWidth:0
    }
  });
