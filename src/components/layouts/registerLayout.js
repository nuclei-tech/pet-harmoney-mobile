import React from 'react';
import { Text, View, Image,StyleSheet } from 'react-native';

import { images } from '../../constants'
import {MediumContanier} from '../../components'
// Connect redux store.
import { useSelector } from 'react-redux';

import { navigate } from '../../navigation/navigation';

const RegisterLayout = props => {
  const { theme } = useSelector(state => state.theme);

  return (
    <View style={styles(theme).mainContanier}>
    <MediumContanier customContainStyle={styles(theme).container}>
      <Image source={images.petHarmonyLogo} />
      <Text style={styles(theme).mainText}>PET HARMONY</Text>
      {props.children}
    </MediumContanier>
    </View>
  );
};

const styles = (props) => StyleSheet.create({
    mainContanier: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: props.Theme.createAccount.backGroundColor,
      },
      container: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      mainText: {
        ...props.Theme.createAccount.mainText,
        paddingTop: 22.5,
        paddingBottom: 22.5,
        marginBottom:8
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

export default RegisterLayout;