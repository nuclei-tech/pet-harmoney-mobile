import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Layout2, Paragraph, ParagraphCard, ProfilePicture, Button } from '../../components'
import { images, rateText } from '../../constants';
import Stars from 'react-native-stars';

import { styles } from './styles';

// Connect redux store.
import { useSelector } from 'react-redux';


const RateSession = props => {
    const { theme } = useSelector(state => state.theme);
    const { container, layoutContanier, profileText, mainContanier, subContanier, subContanierBottom,commentText } = styles(theme)


    return (
        <View style={container}>
            <Layout2
                type={'halfScreen'} // {halfScreen, small }
                layoutColor={theme.Theme.colors.BLUE}
                backgroundColor={theme.Theme.colors.WHITE}
                title={'pet harmony'}
                curve={'primary'}
                customContainerStyle={layoutContanier}
            >
                <View style={mainContanier}>
                    <View style={subContanier}>
                        <Text style={profileText}>How was your session?</Text>
                        <Stars
                            default={2.5}
                            count={5}
                            half={true}
                            starSize={41}
                            fullStar={images.starIcon}
                            emptyStar={images.starIconEmpty}
                            halfStar={images.starIconEmpty}
                            spacing={8}
                        />
                    </View>
                    <ParagraphCard
                        cardBackgroundColor={theme.Theme.colors.WHITE}
                        cardBorderColor={theme.Theme.colors.BLUE}
                        customCardContainer={{
                            maxHeight: 414,
                            flex: 1.4,
                            marginBottom:80,
                            marginTop:80,
                        }}
                    >
                        <Paragraph
                            paragraph={rateText}
                            textColor={theme.Theme.colors.BLACK}
                            textFontSize={14}
                            textFontLineHeight={18}
                            textFontWeight={'300'}
                        />
                    </ParagraphCard>
                </View>
            </Layout2>
        </View>
    );
};

export default RateSession;
