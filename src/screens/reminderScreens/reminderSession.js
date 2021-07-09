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
                layoutColor={theme.Theme.colors.BLUE}
                backgroundColor={theme.Theme.colors.WHITE}
                title={'pet harmony'}
                curve={'primary'}
                customContainerStyle={layoutContanier}
            >
                <View style={mainContanier}>
                    <View style={subContanier}>
                        <ProfilePicture />
                        <Text style={profileText}>It’s time for Bella’s virtual session!</Text>
                    </View>
                    <View style={subContanier}>
                        <Text  style={dayText}>May 15</Text>
                        <Text style={timeText}>at 2:30PM</Text>
                        <Button title={'START SESSION'} backgroundColor={theme.Theme.colors.BLUE} textColor={theme.Theme.colors.WHITE} buttonContainStyle={customButtonContent} />
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Text style={testAudVid}>Test Audio </Text>
                            </TouchableOpacity>
                            <Text style={testAudVid}> | </Text>
                            <TouchableOpacity>
                                <Text style={testAudVid}>Test Video</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Layout2>
        </View>
    );
};

export default RemindSession;
