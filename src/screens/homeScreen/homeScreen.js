import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View,StatusBar, SafeAreaView } from 'react-native';
import { colors, size } from '../../theme'
import { Button, Header, ReminderButton  } from '../../components'
import InputField from '../../layout/forms/textField'
// Connect redux store.
import { useSelector } from 'react-redux';
;
import { navigate } from '../../navigation/navigation';

const HomeScreen = props => {
  const { theme } = useSelector(state => state.theme);
  
  const action = () => {
    console.log('in');
  }

  return (
    <SafeAreaView style={styles.container}>
        {/* <StatusBar  backgroundColor={colors.RED} hidden={true} /> */}
      <Button title="Outline button" type={'outline'} onPress={action} />
      <View style={{ backgroundColor: colors.PURPLE, flexDirection: "row" }} >
        <Button title="Solid Button" type={'outline'} custonTextStyle={{color: colors.WHITE}} color={colors.WHITE} />
        <ReminderButton />
      </View>

      <Button title="Solid Button" color={colors.GREEN} />

      <Button title="Solid Button" color={colors.RED} />
      <Button title="Solid Button" color={colors.YELLOW} custonTextStyle={{color: colors.WHITE}} />
      <Button title="Solid Button" color={colors.YELLOW} custonTextStyle={{color: colors.GREEN, fontSize:9}} />

      <InputField
        inputBackgroundColor={colors.DARK_BLUE} 
        borderColor={colors.GREEN}
        inputColor={colors.GREEN}
        placeholderColor={colors.GREEN}
        placeholder={'Enter name here'}
        inputTextAlign={'center'}
      />

<View style={{backgroundColor: colors.RED, paddingTop: 20}}>

      <InputField
        inputBackgroundColor={colors.RED} 
        borderColor={colors.WHITE}
        inputColor={colors.WHITE}
        placeholderColor={colors.WHITE}
        placeholder={'Enter pet name'}
        inputTextAlign={'center'}
      />

      </View>

      <View style={{backgroundColor: colors.GREEN, paddingTop: 20}}>

      <InputField
        inputBackgroundColor={colors.WHITE} 
        borderColor={colors.WHITE}
        inputColor={colors.GREEN}
        placeholderColor={colors.GREEN}
        placeholder={'Enter card name'}
        inputTextAlign={'left'}
      />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:size.SIZE.BASE,
    backgroundColor:'white'
  },
});


export default HomeScreen;