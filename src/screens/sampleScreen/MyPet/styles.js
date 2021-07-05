import {StyleSheet} from 'react-native';
import {Colors} from '../../../../config';

export const styles = props =>
  StyleSheet.create({
    profileVideosTextContainer: {
      marginBottom: 10,
      marginTop: 10,
      paddingHorizontal: 5,
    },
    profileVideosText: {
      ...props.Theme.userProfile.profileVideosText,
    },
  });
