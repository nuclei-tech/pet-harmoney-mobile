import React, { useState } from 'react';

import {  RegisterLayout, InputField } from '../../components'
import { styles } from './styles';
import { Text, View } from 'react-native'

// Connect redux store.
import { useSelector } from 'react-redux';

const PasswordVerifyScreen = props => {
    const { theme } = useSelector(state => state.theme);
    const [password, setPassword] = useState('')
    const [verify, setverifyerify] = useState('')

    const { customMainText,viewFillContain,forgotPasswordText } = styles(theme)

    return (
        <RegisterLayout customMainText={customMainText}>
            <View style={viewFillContain}>
                <Text style={forgotPasswordText}>Forgot Password?</Text>
                <InputField
                    placeholderColor={theme.Theme.createAccount.placeHolderColor}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    required={true}
                    requireMessage={'Password is required'}
                    placeholder={'Enter new password'}
                    secureTextEntry={true}
                />
                 <InputField
                    placeholderColor={theme.Theme.createAccount.placeHolderColor}
                    onChangeText={text => setverifyerify(text)}
                    value={verify}
                    required={true}
                    requireMessage={'Verify is required'}
                    placeholder={'Verify new password'}
                    secureTextEntry={true}
                />
            </View>
        </RegisterLayout>
    );
};

export default PasswordVerifyScreen;