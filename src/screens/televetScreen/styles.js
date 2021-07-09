import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export const styles = (props, theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    containee: { alignItems: "center", paddingTop: height * 0.05 },
    description: {
      fontFamily: 'SourceSansPro-Regular',
      color: theme.Theme.colors.WHITE,
      textAlign: 'center',
      paddingVertical: 5,
      fontSize: 12,
      lineHeight: 15,
    },
    inputContainer: { marginTop: height * 0.04 },
    textStyle: { backgroundColor: theme.Theme.colors.PURPLE, borderColor: theme.Theme.colors.WHITE, width: 213, height: 41 }
  });
