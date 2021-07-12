import { StyleSheet } from 'react-native';

export const styles = props =>
  StyleSheet.create({
    container: {
      flex: 1
    },
    topContain:{
      alignSelf:'center',
      marginTop:10,
      marginBottom:10,
      marginTop:21
    },
    topContainText:{
     ...props.Theme.shoppoing.topContainText
    },
    subBottomContanier:{
      marginTop:41
    }
  });
