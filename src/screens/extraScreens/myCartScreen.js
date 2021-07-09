import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Layout2, InputField, MediumContanier, ProfilePicture, Button } from '../../components'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from 'date-fns';
import {images,birthYearReverse} from '../../constants'

import { styles } from './styles';

// Connect redux store.
import { useSelector } from 'react-redux';


const MyCart = props => {
    const { theme } = useSelector(state => state.theme);
    const { container, mediumContanierStyle, profileText, flexRowMain, colorField, breedContanier, genderContanier, spayContanier, addButtonContanier,imageStyle } = styles(theme)

    return (
        <View style={{flex:1}}>
            <Layout2
                type={'fullScreen'} // {halfScreen, small }
                layoutColor={theme.Theme.colors.WHITE}
                backgroundColor={theme.Theme.colors.WHITE_SMOKE}
                title={'pet harmony'}
                curve={'secondry'}
            >
                
            </Layout2>
        </View>
    );
};




export default MyCart;
