import React,{useState} from 'react';

import {Button,RegisterLayout} from '../../components'
import { styles } from './styles';
import { navigate } from '../../navigation/navigation';

// Connect redux store.
import { useSelector } from 'react-redux';

const CreateAccountMobile = props => {
  const { theme } = useSelector(state => state.theme);

  return (
    <RegisterLayout>
       <Button title={'Register'} color={theme.Theme.createAccount.registerBackGroundColor} buttonStyle={styles(theme).registerButtonStyle} customTextStyle={styles(theme).buttonRegisterStyle} />
    </RegisterLayout>
  );
};

export default CreateAccountMobile;