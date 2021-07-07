import React,{useState} from 'react';

import { Button, RegisterLayout, InputField } from '../../components'
import { styles } from './styles';
import { Text,TouchableOpacity,View } from 'react-native'

// Connect redux store.
import { useSelector } from 'react-redux';

const CreateAccountMobile = props => {
  const { theme } = useSelector(state => state.theme);
  const [phoneNumber,setPhoneNumber] = useState('')
  const [otp,setOtp] = useState('')

  return (
    <RegisterLayout>
      <View style={styles(theme).viewFillContain}>
      <InputField
        placeholderColor={theme.Theme.createAccount.placeHolderColor}
        type={'phoneNumber'}
        onChangeText={text => setPhoneNumber(text)}
        value={phoneNumber} 
        required={true}
        validator="phone"
        errorMessage="Phone number is invalid"
        requireMessage={'Phone number is required'}
      />
       <InputField
        placeholderColor={theme.Theme.createAccount.placeHolderColor}
        onChangeText={text => setOtp(text)}
        value={otp} 
        defaultValue={otp}
        type={'otp'}
      />
      </View>
      <Button onPress={()=>props.navigation.navigate('Terms Condition')} title={'Register'} backgroundColor={theme.Theme.createAccount.registerBackGroundColor} textColor={theme.Theme.createAccount.registerTextColor} buttonStyle={styles(theme).registerButtonStyle} customTextStyle={styles(theme).buttonRegisterStyle} />
      <TouchableOpacity>
      <Text style={styles(theme).textAlready}>already have an account?</Text>
      </TouchableOpacity>
    </RegisterLayout>
  );
};

export default CreateAccountMobile;