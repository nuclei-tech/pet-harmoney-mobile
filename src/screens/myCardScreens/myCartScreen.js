import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Layout2, InputField, MediumContanier, ProfilePicture, Button, MyCardList } from '../../components'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from 'date-fns';
import { images, birthYearReverse, myCardList } from '../../constants'

import { styles } from './styles';

// Connect redux store.
import { useSelector } from 'react-redux';


const MyCart = props => {
    const { theme } = useSelector(state => state.theme);
    const { container,profileTextStyle,subTotalText,subPriceText,customButtonStyle,customTextStyle,flexMain,flexMainTop,flexMainBottom,flexTopProfile,flexTopButtonMain,flexSubButton,flexTopCard,flexBottomMain } = styles(theme)

    return (
        <View style={container}>
            <Layout2
                type={'fullScreen'} // {halfScreen, small }
                layoutColor={theme.Theme.colors.WHITE}
                backgroundColor={theme.Theme.colors.WHITE_SMOKE}
                title={'pet harmony'}
                curve={'secondry'}
                customtTitleStyle={{ color: theme.Theme.colors.DARK_BLUE }}
                dark
            >
                <View style={flexMain}>
                    <View style={flexMainTop}>
                        <View style={flexTopProfile}>
                            <ProfilePicture customImage={images.shopingCardIcon} removeDefualtStyle={true}/>
                            <Text style={profileTextStyle}>My Cart</Text>
                        </View>
                        <View style={flexTopCard}>
                            <MyCardList data={myCardList} />
                        </View>
                        <View style={flexTopButtonMain}>
                            <View style={flexSubButton}>
                            <Button customTextStyle={customTextStyle} buttonContainStyle={customButtonStyle} backgroundColor={theme.Theme.colors.BLUE} title={'Proceed to checkout'} textColor={theme.Theme.colors.WHITE} />
                            </View>
                            <View style={flexMainBottom}>
                                <View style={{flexDirection:'column',alignItems:'flex-end'}}>
                                <Text style={subTotalText}>Subtotal</Text>
                                <Text style={subPriceText}>$XX.XX</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={flexBottomMain}>

                    </View>
                </View>

            </Layout2>
        </View>
    );
};




export default MyCart;
