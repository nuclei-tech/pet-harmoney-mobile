import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, ScrollView, Platform } from 'react-native';
import { Header,ParagraphCard, Layout2,  Paragraph, CheckBoxField } from '../../components'
import { termsAndConditions } from '../../constants'

// Connect redux store.
import { useSelector } from 'react-redux';

const TermsConditionScreen = props => {
    const { theme } = useSelector(state => state.theme);

    return (
        <SafeAreaView style={styles.container}>
            <Layout2
                type={'fullScreen'} // {halfScreen, small }
                layoutColor={theme.Theme.colors.DARK_BLUE}
                backgroundColor={theme.Theme.colors.GREEN}>
                <Header title={'pet harmony'} noIcon customContainerStyle={{justifyContent:'center'}}/>
                <ScrollView style={{ marginBottom: 10 }} showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
                    <ParagraphCard
                        cardBorderColor={theme.Theme.colors.GREEN}
                        cardBackgroundColor={'transparent'}
                        titleColor={theme.Theme.colors.GREEN}
                        title={'Terms and Conditions'}
                        titleAlign={'left'}
                        imageExists
                    >
                        <Paragraph
                            textColor={theme.Theme.colors.WHITE}
                            paragraph={termsAndConditions}
                            textFontSize={14}
                            textFontLineHeight={18}
                            textFontWeight={'300'}
                            paragraphMarginBottom={5}
                        />
                    </ParagraphCard>
                </ScrollView>
            </Layout2>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});


export default TermsConditionScreen;
