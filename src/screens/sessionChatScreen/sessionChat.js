import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Layout2, InputField, CreditCardScanner, ProfilePicture, Button, ReminderDetailCard,ReminderButton } from '../../components'
import { images, reminderDetails } from '../../constants';

import { styles } from './styles';

// Connect redux store.
import { useSelector } from 'react-redux';


const Reminders = props => {
    const { theme } = useSelector(state => state.theme);
    const { container, layoutContanier,chatMainContent,chatContent, mainContanierReminders,imageContent,tableContanier,reminderAddButton,remindAddContent,reminderButtonRight,reminderButtonLeft,subImageContent,subContanierOther, subContanierTop } = styles(theme)


    return (
        <View style={container}>
            <Layout2
                type={'fullScreen'} // {halfScreen, small }
                layoutColor={theme.Theme.colors.BLUE}
                backgroundColor={theme.Theme.colors.WHITE}
                title={'pet harmony'}
                curve={'primary'}
                customContainerStyle={layoutContanier}
            >

                <View style={mainContanierReminders}>
                    <View style={subContanierTop}>
                        <View style={imageContent}>
                            <View style={subImageContent}>
                               
                            </View>
                        </View>
                        <View style={tableContanier}>
                            <View style={chatMainContent}
      >
          <ScrollView>
          <Text style={chatContent}>
                           Bella’s health is great overall. She would benefit from loosing 1-2 lbs of body fat and we have perscribed purina pro low carb as a
                           </Text>
          </ScrollView>

                            </View>
                           
                        </View>
                    </View>
                    <View style={subContanierOther}>
                    </View>
                </View>
            </Layout2>
        </View>
    );
};

export default Reminders;
