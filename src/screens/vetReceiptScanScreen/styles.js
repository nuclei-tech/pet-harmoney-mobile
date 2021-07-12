import { StyleSheet } from 'react-native';

export const styles = props =>
  StyleSheet.create({
    container: {
        flex: 4,
        backgroundColor: props.Theme.colors.WHITE
      },
    titleStyles: {
        textAlign: 'center',
        fontFamily: 'Source Sans Pro',
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 28,
        color: props.Theme.colors.WHITE,
        marginTop: 40,
        marginBottom: 24
    }
    // mainText: {
    //   ...props.Theme.createAccount.mainText,
    //   marginTop: 31,
    //   marginBottom: 31,
    // },
  });
