import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import {  Layout2,InputField,CreditCardScanner } from '../../components'
import { images } from'../../constants';

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
                        <CreditCardScanner customTitleStyle={payTextStyle} middleImage={images.creditCardGreen}/>
                    </View>

                    {/* <CreditCardScanner/> */}


                    <View style={{flex:1,flexDirection:'column'}}>
                        <InputField backgroundColor={'white'} placeholder={'Name on Card'}/>
                        <InputField customTextStyle={{marginTop:3}} backgroundColor={'white'} placeholder={'Card Number'} />
                        <View style={{flex:15,flexDirection:'row'}}>
                        <View style={{flex:9}}>
                        <InputField customTextStyle={{marginTop:3}} backgroundColor={'white'} placeholder={'Expiration Date'} />
                        </View>
                        <View style={{flex:6}}>
                        <InputField  customTextStyle={{marginTop:3}} backgroundColor={'white'} placeholder={'CVV'} />
                        </View>
                        </View>
                        <InputField customTextStyle={{marginTop:3}} backgroundColor={'white'} placeholder={'Billing Address'} />
                    </View>
                </ScrollView>
            </Layout2>
        </View>
    );
};

export default SelectSubOption;
