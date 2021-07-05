import { StyleSheet } from 'react-native';
import { Colors } from '../../../../config';

export const styles = props =>
  StyleSheet.create({
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
    textAlready:{
      ...props.Theme.createAccount.textAlready,
      marginTop:4
    },
    viewFillContain:{
      width:'100%'
    }
  });
