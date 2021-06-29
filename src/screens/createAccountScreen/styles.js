import { StyleSheet } from 'react-native';
import { Colors } from '../../../config';

export const styles = props =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.Theme.createAccount.backGroundColor,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:'column'
    },
    mainText: {
      ...props.Theme.createAccount.mainText,
      marginTop: 31,
      marginBottom: 31,
    },
    buttonStyle: {
      borderColor: props.Theme.createAccount.borderColor,
      borderWidth: 4
    },
    buttonTextStyle: {
      ...props.Theme.createAccount.buttonTextColor,
      color: props.Theme.createAccount.borderColor,
    }
  });
