
import React, { useState } from 'react';

import { Button, RegisterLayout, InputField } from '../../components'
import { styles } from './styles';
import { Text, TouchableOpacity, View } from 'react-native'

// Connect redux store.
import { useSelector } from 'react-redux';

const OtpHandleScreen = props => {
    const { theme } = useSelector(state => state.theme);
    const [otp,setOtp] = useState('')
    const { customMainText, viewFillContain, forgotOtpText } = styles(theme)

    return (
        <RegisterLayout customMainText={customMainText}>
            <View style={viewFillContain}>
                <Text style={forgotOtpText}>We texted a six digit code to xxx-xxx-7890</Text>
                <InputField
                    placeholderColor={theme.Theme.createAccount.placeHolderColor}
                    onChangeText={text => setOtp(text)}
                    value={otp}
                    defaultValue={otp}
                    type={'otp'}
                />
            </View>
        </RegisterLayout>
    );
};

export default OtpHandleScreen;