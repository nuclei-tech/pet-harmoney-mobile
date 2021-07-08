import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Layout2, InputField, CreditCardScanner } from '../../components'
import { images } from '../../constants';

import { styles } from './styles';

// Connect redux store.
import { useSelector } from 'react-redux';


const SelectSubOption = props => {
    const { theme } = useSelector(state => state.theme);
    const { layoutContanier, container, topContanier, subTextStyle, subTextValue, payOptionContanierText, payTextStyle,cardMain,cardInputStyle,subCardConatanier,flexExpire,flexCvv } = styles(theme)

    const [cardName,setCardName] = useState('') 
    const [cardNo,setCardNo] = useState('') 
    const [exData,setExDate] = useState('') 
    const [cvv,setCvv] = useState('') 
    const [address,setAddress] = useState('') 

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
                        <CreditCardScanner customTitleStyle={payTextStyle} middleImage={images.creditCardGreen} />
                    </View>
                    <View style={cardMain}>
                        <InputField
                            onChangeText={text => setCardName(text)}
                            value={cardName}
                            backgroundColor={'white'}
                            placeholder={'Name on Card'} />
                        <InputField
                            customTextStyle={cardInputStyle}
                            onChangeText={text => setCardNo(text)}
                            value={cardNo}
                            backgroundColor={'white'}
                            placeholder={'Card Number'} />
                        <View style={subCardConatanier}>
                            <View style={flexExpire}>
                                <InputField
                                    customTextStyle={cardInputStyle}
                                    onChangeText={text => setExDate(text)}
                                    value={exData}
                                    backgroundColor={'white'}
                                    placeholder={'Expiration Date'} />
                            </View>
                            <View style={flexCvv}>
                                <InputField
                                    onChangeText={text => setCvv(text)}
                                    value={cvv}
                                    customTextStyle={cardInputStyle}
                                    backgroundColor={'white'}
                                    placeholder={'CVV'} />
                            </View>
                        </View>
                        <InputField
                            onChangeText={text => setAddress(text)}
                            value={address}
                            customTextStyle={cardInputStyle}
                            backgroundColor={'white'}
                            placeholder={'Billing Address'} />
                    </View>
                </ScrollView>
            </Layout2>
        </View>
    );
};

export default SelectSubOption;
