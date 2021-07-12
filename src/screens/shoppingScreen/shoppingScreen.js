import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { styles } from './styles';
import { Layout2,SearchField,ShoppingCardList } from '../../components'
import { myCardList } from '../../constants'



// Connect redux store.
import { useSelector } from 'react-redux';


const ShoppingScreen = props => {

  const { theme } = useSelector(state => state.theme);
  const { container,topContain,topContainText,subBottomContanier } = styles(theme)

  return (
    <View style={container}>
      <Layout2
        type={'fullScreen'} // {halfScreen, small }
        layoutColor={theme.Theme.colors.WHITE}
        backgroundColor={theme.Theme.colors.WHITE_SMOKE}
        title={'pet harmony'}
        curve={'primary'}
        customtTitleStyle={{ color: theme.Theme.colors.DARK_BLUE }}
        dark
      >

        <View flex={2}>
          <View flex={1.6}>
            <View flex={0.1} style={topContain}>
            <Text style={topContainText}>Shooping</Text>
            </View>
            <View flex={0.2}>
            <SearchField/>
            </View>
              <View flex={1.3} style={subBottomContanier}>
              <ShoppingCardList data={myCardList}  buttonBackground={theme.Theme.colors.BLUE}
                  buttonTextColor={theme.Theme.colors.WHITE}/>
              </View>
          </View>
          <View flex={0.4}>
          </View>
        </View>

      </Layout2>
    </View>
  );
};



export default ShoppingScreen;
