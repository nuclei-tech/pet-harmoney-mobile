import { StyleSheet } from 'react-native';

export const styles = (props,theme) =>
  StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center'
    },
    description: {
        fontFamily: 'SourceSansPro-Regular',
        color: theme.Theme.colors.WHITE,
        textAlign: 'center',
        paddingVertical: 5,
        fontSize: 12,
        lineHeight: 15,
    },
  });
