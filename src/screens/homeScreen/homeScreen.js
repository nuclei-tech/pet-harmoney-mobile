import React from 'react';
import { Text,SafeAreaView } from 'react-native';
import { styles } from './styles';

// Connect redux store.
import { useSelector } from 'react-redux';


const HomeScreen = props => {
  const { theme } = useSelector(state => state.theme);

  return (
        <SafeAreaView>
            <Text>Home Screen</Text>
        </SafeAreaView>
  );
};



export default HomeScreen;
