import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Button, Header, ReminderButton, Layout2, IconHeader, IconTabHeader, SecondaryTopTitleHeader } from '../../components'
import { images, iconTabDetails } from '../../constants'

// Connect redux store.
import { useSelector } from 'react-redux';
;
import { navigate } from '../../navigation/navigation';

const CreateAccountScreen = props => {
  const { theme } = useSelector(state => state.theme);
  const colors = theme.Theme.colors

  return (
    <SafeAreaView style={styles.container}>
      <Layout2
        type={'halfScreen'}
        curve={'primary'}
        layoutColor={theme.Theme.colors.BLUE}
        customStyle={{ padding: 0 }}
      // header={'hide'} // color is required
      >
      <SecondaryTopTitleHeader
        primaryTitle={'Pet Harmony'}
        secondaryTitle={'Practitioners'}
        backgroundCustomColor={colors.BLUE}
      />
      <View>
      <IconHeader 
          primaryImage={images.careTaker}
          primaryTextFontSize={24}
          primaryTextLineHeight={28.49}
          primaryImageWidth={60}
          primaryImageHeight={60}
          mainTextColor={colors.PURPLE}
          mainText={'Approved Caretakers'}
          containerMarginTop={40}
          containerMarginBottom={35}
        />
        <IconTabHeader
          tabDetails={iconTabDetails}
          containerMarginTop={61}
          containerMarginBottom={35}
        />
        <IconHeader 
          primaryImage={images.shopping}
          primaryTextFontSize={18}
          primaryTextLineHeight={21.37}
          primaryImageWidth={53}
          primaryImageHeight={53}
          mainTextColor={colors.DARK_BLUE}
          mainText={'My Cart'}
          containerMarginTop={40}
          containerMarginBottom={35}
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