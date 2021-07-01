import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { colors, size } from '../../theme'
import { Button, Header, ReminderButton, Layout2, IconHeader } from '../../components'
import { images } from '../../constants'

// Connect redux store.
import { useSelector } from 'react-redux';
;
import { navigate } from '../../navigation/navigation';

const CreateAccountScreen = props => {
  const { theme } = useSelector(state => state.theme);

 
  return (
    <SafeAreaView style={styles.container}>
      <Layout2
      type={'halfScreen'}
        curve = {'secondary'} 
        layoutColor={colors.GREEN} // color is required
      >
      <View>
        <IconHeader 
          primaryImage={images.careTaker}
          primaryTextFontSize={24}
          primaryTextLineHeight={28.49}
          primaryImageWidth={60}
          primaryImageHeight={60}
          mainTextColor={colors.PURPLE}
          mainText={'Approved Caretakers'}
        />
        <IconHeader
          multiple
          secondaryImage1={images.sessions}
          secondaryImage2={images.records}
          secondaryImage3={images.pets}
          secondaryImage4={images.medication}
        />
        <IconHeader 
          primaryImage={images.shopping}
          primaryTextFontSize={18}
          primaryTextLineHeight={21.37}
          primaryImageWidth={53}
          primaryImageHeight={53}
          mainTextColor={colors.DARK_BLUE}
          mainText={'My Cart'}
        />
        {/* <Text>From parent</Text>
        <Text>From parent</Text>
        <Text>From parent</Text>
        <Text>From parent</Text>
        <Text>From parent</Text>
        <Text>From parent</Text>
        <Text>From parent</Text>
        <Text>From parent</Text>
        <Text>From parent</Text> */}
        
      </View>
      </Layout2>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});


export default CreateAccountScreen;