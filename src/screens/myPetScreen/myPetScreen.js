import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Layout2, InputField, CreditCardScanner, ProfilePicture, Button } from '../../components'
import { images } from '../../constants';

import { styles } from './styles';

// Connect redux store.
import { useSelector } from 'react-redux';


const RemindSession = props => {
    const { theme } = useSelector(state => state.theme);
    const { container, layoutContanier, profileText,mainContanier,subContanier,dayText,timeText,customButtonContent,testAudVid } = styles(theme)


    return (
        <View style={container}>
            <Layout2
                type={'small'} // {halfScreen, small }
                layoutColor={theme.Theme.colors.PURPLE}
                backgroundColor={theme.Theme.colors.WHITE}
                title={'pet harmony'}
                curve={'primary'}
                // customContainerStyle={layoutContanier}
            >
                <View style={mainContanier}>
                    <View style={subContanier}>
                        <ProfilePicture />
                        <Text style={profileText}>Bella’s virtual session is confirmed!</Text>
                    </View>
                    <View style={subContanier}>
                        <Text style={testAudVid}>Add to my calendar</Text>
                        <Text  style={dayText}>May 15</Text>
                        <Text style={timeText}>at 2:30PM</Text>
                    </View>
                </View>
            </Layout2>
        </View>
    );
};

export default RemindSession;
