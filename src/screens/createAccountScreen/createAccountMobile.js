import React, { useState } from 'react';

import { Button, RegisterLayout, InputField } from '../../components'
import { styles } from './styles';
import {Text} from 'react-native'

// Connect redux store.
import { useSelector } from 'react-redux';

const CreateAccountMobile = props => {
  const { theme } = useSelector(state => state.theme);

  return (
    <RegisterLayout>
      <InputField
        placeholderColor={theme.Theme.createAccount.placeHolderColor}
        placeholder={'123 - 456 - 7890'}
      />
      <InputField
        placeholderColor={theme.Theme.createAccount.placeHolderColor}
        placeholder={'.   .   .   .   .   .   .   .'}
      />
      <Button title={'Register'} color={theme.Theme.createAccount.registerBackGroundColor} buttonStyle={styles(theme).registerButtonStyle} customTextStyle={styles(theme).buttonRegisterStyle} />
      <Text style={styles(theme).textAlready}>already have an account?</Text>
    </RegisterLayout>
  );
};

export default CreateAccountMobile;