import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Layout2, ScheduleTitle, InputField, ProfilePicture, Button } from '../../components'
import { images } from '../../constants';

import { styles } from './styles';

// Connect redux store.
import { useSelector } from 'react-redux';

const {height, width} = Dimensions.get('window')

const SessionTimeConfirmScreen = props => {
    const { theme } = useSelector(state => state.theme);
    const { container, layoutContanier, profileText,mainContanier,subContanier,dayText,timeText,customButtonContent,testAudVid } = styles(theme)


    return (
      <View style={container}>
            <Layout2
                type={'fullScreen'} // {halfScreen, small }
                layoutColor={theme.Theme.colors.PURPLE}
                backgroundColor={theme.Theme.colors.WHITE}
                title={'pet harmony'}
                curve={'secondary'}
            >
                <View flex={1} style={{ alignItems: "center", paddingTop: height * 0.05 }}>

                  <ScheduleTitle>{"Schedule a virtual session"}</ScheduleTitle>
                  <Text style={{
                    fontFamily: 'Source Sans Pro',
                    fontWeight: '300',
                    fontSize: 64,
                    lineHeight: 76,
                    color: 'white',
                    marginTop: 40
                  }}>May 15</Text>
                  <InputField
                    placeholderColor={theme.Theme.colors.WHITE}
                    placeholder={'select time'}
                    customMainContanier={{borderColor: theme.Theme.colors.WHITE, height: 52, width: 213, marginTop: 20, paddingTop: 0, paddingBottom: 2,}}
                    rightImageExist
                    editable={false}
                  />
                  
                </View>
                    
            </Layout2>
        </View>
       
    );
};

export default SessionTimeConfirmScreen;
