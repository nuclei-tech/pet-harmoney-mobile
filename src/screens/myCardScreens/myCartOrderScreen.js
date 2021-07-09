import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Layout2, InputField, MediumContanier, ProfilePicture, Button, MyCardList,PlaceOrderCard } from '../../components'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from 'date-fns';
import { images, birthYearReverse, myCardList } from '../../constants'

import { styles } from './styles';

// Connect redux store.
import { useSelector } from 'react-redux';


const MyCartOrder = props => {
    const { theme } = useSelector(state => state.theme);
    const { container, profileTextStyle, flexTopCardOrder, flexTopButtonMainOrder, flexMain, flexMainTopOrder, flexBottomMainOrder, flexTopProfileOrder, orderText, flexSubButton, flexTopCard, flexBottomMain } = styles(theme)

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
                    <View style={flexMainTopOrder}>
                        <View style={flexTopProfileOrder}>
                            <ProfilePicture customImage={images.shopingCardIcon} removeDefualtStyle={true} />
                            <Text style={profileTextStyle}>My Cart</Text>
                        </View>
                        <View style={flexTopCardOrder}>
                                <PlaceOrderCard/>
                        </View>
                        <View style={flexTopButtonMainOrder}>
                            <Text style={orderText}>Order details</Text>
                            <MyCardList data={myCardList} />
                        </View>
                    </View>
                    <View style={flexBottomMainOrder}>

                    </View>
                </View>

            </Layout2>
        </View>
    );
};




export default MyCartOrder;


