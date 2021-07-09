import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Layout2, InputField, CreditCardScanner, ProfilePicture, Button, ReminderDetailCard,ReminderButton } from '../../components'
import { images, reminderDetails } from '../../constants';

import { styles } from './styles';

// Connect redux store.
import { useSelector } from 'react-redux';


const Reminders = props => {
    const { theme } = useSelector(state => state.theme);
    const { container, layoutContanier, remiderProfileText, mainContanierReminders,imageContent,tableContanier,reminderAddButton,remindAddContent,reminderButtonRight,reminderButtonLeft,subImageContent,subContanierOther, subContanierTop } = styles(theme)


    return (
        <View style={container}>
            <Layout2
                type={'fullScreen'} // {halfScreen, small }
                layoutColor={theme.Theme.colors.DARK_BLUE}
                backgroundColor={theme.Theme.colors.WHITE}
                title={'pet harmony'}
                curve={'primary'}
                customContainerStyle={layoutContanier}
            >

                <View style={mainContanierReminders}>
                    <View style={subContanierTop}>
                        <View style={imageContent}>
                            <View style={subImageContent}>
                                <ProfilePicture removeDefualtStyle={true} customImage={images.reminderIcon} />
                                <Text style={remiderProfileText}>Reminders</Text>
                            </View>
                        </View>
                        <View style={tableContanier}>
                            <ReminderDetailCard
                                backgroundColor={theme.Theme.colors.DARK_BLUE}
                                titleColor={theme.Theme.colors.YELLOW}
                                descriptionColor={theme.Theme.colors.GREY}
                                borderBottomColor={theme.Theme.colors.GREY}
                                dataList={reminderDetails}
                            />
                        </View>
                        <View style={reminderAddButton}>
                            <View style={reminderButtonLeft}>
                               <ReminderButton/>
                            </View>
                            <View style={reminderButtonRight}>
                                <Text style={remindAddContent}>Add Reminder</Text>
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
