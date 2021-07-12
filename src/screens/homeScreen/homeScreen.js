import React from 'react';
import { Text,SafeAreaView,View, Dimensions, Platform } from 'react-native';
import { styles } from './styles';
import { Header, Layout2, MyPetsTabs, ParagraphCard, CommunityList, ReminderDetailCard, DetailList} from '../../components'
import { petsTabDetails, communityDetails, petTimelineDetails } from '../../constants'
// Connect redux store.
import { useSelector } from 'react-redux';

const {width, height} = Dimensions.get('window')

const HomeScreen = props => {
  const { theme } = useSelector(state => state.theme);
  const colors = theme.Theme.colors;
  const { container } = styles(props);

  return (
    <SafeAreaView style={container}>
    <Layout2
     backgroundColor={theme.Theme.colors.DARK_BLUE}
   >
     <Header title="pet harmony"/>
     <MyPetsTabs tabDetails={petsTabDetails} />
      <ParagraphCard
           cardBorderColor={theme.Theme.colors.BLUE}
           cardBackgroundColor={'transparent'}
           titleColor={theme.Theme.colors.WHITE}
           title={'Community'}
           titleAlign={'center'}
           customCardContainer={{
             paddingTop: 15,
             paddingBottom: 10,
             paddingLeft: 16,
             paddingRight: 16,
             maxHeight: Platform.OS === 'ios' ? height * 0.28 : height * 0.31,
             marginBottom: 15
           }}
         >
           <CommunityList communityDetails={communityDetails} />
     </ParagraphCard>
    <ParagraphCard
           cardBorderColor={theme.Theme.colors.YELLOW}
           cardBackgroundColor={'transparent'}
           titleColor={theme.Theme.colors.WHITE}
           title={'Timeline'}
           titleAlign={'center'}
           customCardContainer={{
            paddingTop: 15,
            paddingBottom: 10,
            paddingLeft: 32,
            paddingRight: 32,
            maxHeight: height * 0.2,
          }}
          customCardTitleStyles={{
            marginBottom: 0
          }}
         >
           <DetailList
             backgroundColor={theme.Theme.colors.DARK_BLUE}
             titleColor={theme.Theme.colors.YELLOW}
             descriptionColor={theme.Theme.colors.GREY}
             borderBottomColor={theme.Theme.colors.GREY}
             dataList={petTimelineDetails}
             customListItemContainerStyle={{
               paddingVertical: 9,
               paddingHorizontal: 13
             }}
             customListMainContainerStyles={{
               marginTop: 13,
             }}
           />
     </ParagraphCard>
   </Layout2>
 </SafeAreaView>
  );
};

export default HomeScreen;
