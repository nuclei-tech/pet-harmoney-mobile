import React from 'react';
import { Text,SafeAreaView,View } from 'react-native';
import { styles } from './styles';
import { Header, Layout2, MyPetsTabs, ParagraphCard, CommunityList, ReminderDetailCard} from '../../components'
import { petsTabDetails, communityDetails, reminderDetails } from '../../constants'

// Connect redux store.
import { useSelector } from 'react-redux';

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
              forHomeCards
              containerPaddingTop={15}
              containerPaddingBottom={10}
              containerPaddingLeft={16}
              containerPaddingRight={16}
              cardWidth={154}
              cardMinHeight={250}
            >
              <CommunityList communityDetails={communityDetails} />
        </ParagraphCard>
        <ParagraphCard
              cardBorderColor={theme.Theme.colors.YELLOW}
              cardBackgroundColor={'transparent'}
              titleColor={theme.Theme.colors.WHITE}
              title={'Timeline'}
              titleAlign={'center'}
              forHomeCards
              containerPaddingTop={15}
              containerPaddingBottom={10}
              containerPaddingLeft={32}
              containerPaddingRight={32}
              cardMinHeight={163}
              cardTitleMarginBottom={0}
            >
              <ReminderDetailCard
                backgroundColor={theme.Theme.colors.DARK_BLUE}
                titleColor={theme.Theme.colors.YELLOW}
                descriptionColor={theme.Theme.colors.GREY}
                borderBottomColor={theme.Theme.colors.GREY}
                dataList={reminderDetails}
              />
        </ParagraphCard>
      </Layout2>
    </SafeAreaView>
  );
}


// const HomeScreen = props => {
//   const { theme } = useSelector(state => state.theme);
//   const colors = theme.Theme.colors;
//   const {container} = styles

//   return (
//         <SafeAreaView style={container}>

//             {/* <Layout2
//         // 
//         backgroundColor={colors.DARK_BLUE}
//         layoutColor={colors.DARK_BLUE}
//       >
//         <Header
//           title='PET HARMONY'
//           dark
//           // login={true} 
//           customtTitleStyle={{ color: theme.Theme.colors.WHITE }}
//         />
        
//       </Layout2> */}
//       <View style={{backgroundColor: colors.DARK_BLUE, height: '100%', paddingHorizontal: 45}}>
//         <MyPetsTabs tabDetails={petsTabDetails} />
//         <ParagraphCard
//               cardBorderColor={theme.Theme.colors.BLUE}
//               cardBackgroundColor={'transparent'}
//               titleColor={theme.Theme.colors.WHITE}
//               title={'Community'}
//               titleAlign={'center'}
//             >
//               <Text>Hellooo kjjkjk hghghgh</Text>
//             </ParagraphCard>
//       </View>
//         </SafeAreaView>
//   );
// };



export default HomeScreen;
