import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { styles } from './styles';
import { Layout2,SearchField,ShoppingCardList } from '../../components'
import { myCardList } from '../../constants'



// Connect redux store.
import { useSelector } from 'react-redux';


const ShoppingScreen = props => {

  const { theme } = useSelector(state => state.theme);
  const { container } = styles(theme)

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
                <SearchField/>
                <ShoppingCardList data={myCardList}/>
          </View>
          <View flex={0.4}>
          </View>
        </View>

      </Layout2>
    </View>
  );
};



export default ShoppingScreen;
