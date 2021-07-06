import React from 'react';
import { Text,SafeAreaView } from 'react-native';
import { styles } from './styles';

// Connect redux store.
import { useSelector } from 'react-redux';


const MyPetScreen = props => {
  const { theme } = useSelector(state => state.theme);

  return (
        <SafeAreaView>
            <Text>MyPet Screen</Text>
        </SafeAreaView>
  );
};



export default MyPetScreen;
