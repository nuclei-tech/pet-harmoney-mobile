import React, { useState } from 'react';

import { Button, RegisterLayout, InputField } from '../../components'
import { styles } from './styles';
import { Text, TouchableOpacity, View } from 'react-native'

// Connect redux store.
import { useSelector } from 'react-redux';

const CreateAccountMobile = props => {
    const { theme } = useSelector(state => state.theme);
    const [email, setEmail] = useState('')

    const { customMainText,viewFillContain,forgotPasswordText } = styles(theme)

    return (
        <RegisterLayout customMainText={customMainText}>
            <View style={viewFillContain}>
                <Text style={forgotPasswordText}>Forgot Password?</Text>
                <InputField
                    placeholderColor={theme.Theme.createAccount.placeHolderColor}
                    type={'email'}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    required={true}
                    validator="email"
                    errorMessage="email is invalid"
                    requireMessage={'email is required'}
                    placeholder={'Enter email address'}
                />
            </View>
        </RegisterLayout>
    );
};

export default CreateAccountMobile;