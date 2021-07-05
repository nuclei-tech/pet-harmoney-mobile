import React,{useState} from 'react';

import {Button,RegisterLayout} from '../../components'
import { styles } from './styles';
import { navigate } from '../../navigation/navigation';

// Connect redux store.
import { useSelector } from 'react-redux';

const CreateAccountScreen = props => {
  const { theme } = useSelector(state => state.theme);
  const [createAccount,setCreateAccount] = useState(false)

  return (
    <RegisterLayout>
     {createAccount ?
      <>
       <Button textColor={theme.Theme.createAccount.buttonColor} boarderColor={theme.Theme.createAccount.buttonColor} onPress={()=>navigate('Create Account Mobile')} type={'outline'} title={'Register with Phone'} color={theme.Theme.createAccount.buttonColor} buttonStyle={styles(theme).buttonStyle} customTextStyle={styles(theme).buttonTextStyle} />
       <Button textColor={theme.Theme.createAccount.buttonColor} boarderColor={theme.Theme.createAccount.buttonColor} type={'outline'} title={'Login with Facebook'} color={theme.Theme.createAccount.buttonColor} buttonStyle={styles(theme).buttonStyle} customTextStyle={styles(theme).buttonTextStyle} />
       <Button textColor={theme.Theme.createAccount.buttonColor} boarderColor={theme.Theme.createAccount.buttonColor} type={'outline'} title={'Create an account'} color={theme.Theme.createAccount.buttonColor} buttonStyle={styles(theme).buttonStyle} customTextStyle={styles(theme).buttonTextStyle} />
       </>
       :<Button onPress={()=>{setCreateAccount(true)}} type={'outline'} title={'Create an account'} textColor={theme.Theme.createAccount.buttonColor} boarderColor={theme.Theme.createAccount.buttonColor} buttonStyle={styles(theme).buttonStyle} customTextStyle={styles(theme).buttonTextStyle} />
    }
    </RegisterLayout>
  );
};

export default CreateAccountScreen;