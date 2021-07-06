import { Dimensions, StyleSheet } from 'react-native';
const {width} = Dimensions.get('window')

export const styles = props =>
  StyleSheet.create({
    customMainText:{
      paddingBottom:55.5
    },
    viewFillContain:{
      width:'100%',
    },
    forgotPasswordText:{
      ...props.Theme.forgotEmail.forgotTextStyles,
      paddingTop:12.5,
      paddingBottom:3.5,
      alignSelf:'center',
    },
    forgotOtpText:{
      ...props.Theme.forgotOtp.forgotOtpText,
      paddingTop:12.5,
      paddingBottom:12,
      alignSelf:'center',
      marginHorizontal:width/100*10,
      textAlign:'center'
    }
  });
