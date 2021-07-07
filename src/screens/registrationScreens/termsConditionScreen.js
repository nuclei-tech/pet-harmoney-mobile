import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { ParagraphCard, Layout2, Paragraph, CheckBoxField } from '../../components'
import { termsAndConditions } from '../../constants'

// Connect redux store.
import { useSelector } from 'react-redux';

const { height } = Dimensions.get('window')

const TermsConditionScreen = props => {
    const { theme } = useSelector(state => state.theme);
    const { layoutContanier, paragraphCardStyle, container,checkBoxContainer } = styles(theme)

    return (
        <View style={container}>
            <Layout2
                type={'fullScreen'} // {halfScreen, small }
                layoutColor={theme.Theme.colors.DARK_BLUE}
                backgroundColor={theme.Theme.colors.GREEN}
                title={'pet harmony'}
                curve={'secondry'}
                noIcon
                customContainerStyle={layoutContanier}
            >
                <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
                    <ParagraphCard
                        cardBorderColor={theme.Theme.colors.GREEN}
                        cardBackgroundColor={'transparent'}
                        titleColor={theme.Theme.colors.GREEN}
                        title={'Terms and Conditions'}
                        titleAlign={'left'}
                        customCardContainer={paragraphCardStyle}
                        imageExists
                    >
                        <Paragraph
                            textColor={theme.Theme.colors.WHITE}
                            paragraph={termsAndConditions}
                            textFontSize={14}
                            textFontLineHeight={18}
                            textFontWeight={'300'}
                        />
                    </ParagraphCard>
                    <View style={checkBoxContainer}>
                        <CheckBoxField title={'I agree to the terms and conditions'} />
                    </View>
                </ScrollView>
            </Layout2>
        </View>
    );
};

const styles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.Theme.colors.WHITE
    },
    layoutContanier: {
        justifyContent: 'center'
    },
    paragraphCardStyle: {
        marginTop: height * 0.05
    },
    checkBoxContainer:{
        paddingTop:12.5,
        marginTop: height * 0.02,
    }
});


export default TermsConditionScreen;
