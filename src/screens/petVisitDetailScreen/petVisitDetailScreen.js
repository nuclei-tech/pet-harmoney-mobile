import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity, Dimensions, TouchableHighlight } from 'react-native';
import { colors, size } from '../../theme'
import { ProfilePicture, Layout2, ParagraphCard, DetailList, ReminderDetailCard} from '../../components'
// Connect redux store.
import { useSelector } from 'react-redux';
import { Tab, TabView } from 'react-native-elements';
import { navigate } from '../../navigation/navigation';
import { petVisitDetails } from '../../constants';
import { styles } from './styles';

const { height, width } = Dimensions.get('window');

const PetVisitDetails = (props) => {
  
  const { theme } = useSelector(state => state.theme);

  // navigate the page
  // const navigatePage = () => {
  //   navigate('LiveScreen');
  // };

  const {
    container
  } = styles(theme);
  return (
    <SafeAreaView style={container}>
        <Layout2
            type={'halfScreen'}
            layoutColor={theme.Theme.colors.RED}
        >
          <View style={{alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15}}>
            <View style={{ zIndex: 2, marginTop: 0}}>
              <ProfilePicture />
            </View>
            <View style={{position: 'absolute', zIndex: 0, top: 70, width: '100%'}}>
                <ParagraphCard
                    cardBackgroundColor={theme.Theme.colors.WHITE}
                    cardBorderColor={theme.Theme.colors.RED}
                    customCardContainer={{
                      maxHeight: 515,
                      paddingTop: 70,
                      paddingLeft: 28,
                      paddingRight: 28,
                      paddingBottom: 60
                    }}
                    
                >
                    <DetailList 
                        backgroundColor={theme.Theme.colors.WHITE}
                        titleColor={theme.Theme.colors.RED}
                        descriptionColor={theme.Theme.colors.GREY}
                        borderBottomColor={theme.Theme.colors.GREY}
                        headerTitleColor={theme.Theme.colors.RED}
                        headerTitle={'Bella’s Visit Details'}
                        dataList={petVisitDetails}
                        customListItemContainerStyle={{
                          paddingVertical: 15,
                          paddingHorizontal: 22
                        }}
                        customHeaderTitleStyle={{
                          marginTop: 7,
                          marginBottom: 29,
                          fontSize: 20,
                          fontWeight: '700',
                          lineHeight: 24
                        }}
                        customTitleStyle={{
                          fontSize: 11.5,
                          fontWeight: '700',
                          lineHeight: 14
                        }}
                        customDescriptionStyle={{
                          fontSize: 11.5,
                          fontWeight: 'normal',
                          lineHeight: 14
                        }}
                    />
                </ParagraphCard>
            </View>
            </View>
        </Layout2>
    
    </SafeAreaView>
  );
};

export default PetVisitDetails;