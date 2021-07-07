import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import {  Layout2,InputField } from '../../components'

import { styles } from './styles';

// Connect redux store.
import { useSelector } from 'react-redux';


const SelectSubOption = props => {
    const { theme } = useSelector(state => state.theme);
    const { layoutContanier, container,topContanier,subTextStyle,subTextValue,payOptionContanierText,payTextStyle } = styles(theme)

    return (
        <View style={container}>
            <Layout2
                type={'fullScreen'} // {halfScreen, small }
                layoutColor={theme.Theme.colors.GREEN}
                backgroundColor={theme.Theme.colors.GREEN}
                title={'pet harmony'}
                curve={'secondry'}
                noIcon
                customContainerStyle={layoutContanier}
            >
                <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
                    <View style={topContanier}>
                        <Text style={subTextStyle}>Subscription Options</Text>
                        <Text style={subTextValue}>$X.XX</Text>
                    </View>
                    <View style={payOptionContanierText}>
                        <Text style={payTextStyle}>Add a payment method</Text>
                    </View>
                    <View>
                        <InputField backgroundColor={'white'} placeholder={'Name on Card'}/>
                        <InputField backgroundColor={'white'} placeholder={'Card Number'} />
                        <InputField backgroundColor={'white'} placeholder={'Expiration Date'} />
                        <InputField backgroundColor={'white'} placeholder={'CVV'} />
                        <InputField backgroundColor={'white'} placeholder={'Billing Address'} />
                    </View>
                </ScrollView>
            </Layout2>
        </View>
    );
};

export default SelectSubOption;
