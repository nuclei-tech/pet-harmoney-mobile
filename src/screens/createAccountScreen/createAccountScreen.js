import React,{useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

import { images } from '../../constants'
import {Button} from '../../components'
// Connect redux store.
import { useSelector } from 'react-redux';
import { styles } from './styles';

import { navigate } from '../../navigation/navigation';

const CreateAccountScreen = props => {
  const { theme } = useSelector(state => state.theme);
  const [createAccount,setCreateAccount] = useState(false)

  return (
    <SafeAreaView style={styles(theme).container}>
      <Image source={images.petHarmonyLogo} />
      <Text style={styles(theme).mainText}>PET HARMONY</Text>
      {createAccount ?
      <>
       <Button type={'outline'} title={'Register with Phone'} color={theme.Theme.createAccount.buttonColor} buttonStyle={styles(theme).buttonStyle} custonTextStyle={styles(theme).buttonTextStyle} />
       <Button type={'outline'} title={'Login with Facebook'} color={theme.Theme.createAccount.buttonColor} buttonStyle={styles(theme).buttonStyle} custonTextStyle={styles(theme).buttonTextStyle} />
       <Button type={'outline'} title={'Create an account'} color={theme.Theme.createAccount.buttonColor} buttonStyle={styles(theme).buttonStyle} custonTextStyle={styles(theme).buttonTextStyle} />
      </>
       :<Button onPress={()=>{setCreateAccount(true)}} type={'outline'} title={'Create an account'} color={theme.Theme.createAccount.buttonColor} buttonStyle={styles(theme).buttonStyle} custonTextStyle={styles(theme).buttonTextStyle} />
    }
    </SafeAreaView>
  );
};

export default CreateAccountScreen;