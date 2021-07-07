import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Text } from 'react-native';
import {  Layout2, SubscriptionCard } from '../../components'

// Connect redux store.
import { useSelector } from 'react-redux';

const { height } = Dimensions.get('window')

const SubscriptionOption = props => {
    const { theme } = useSelector(state => state.theme);
    const { layoutContanier, container,topContanier,subTextStyle,subTextValue,payOptionContanier,payTextStyle } = styles(theme)

    return (
        <View style={container}>
            <Layout2
                type={'fullScreen'} // {halfScreen, small }
                layoutColor={theme.Theme.colors.GREEN}
                backgroundColor={theme.Theme.colors.GREEN}
                title={'pet harmony'}
                curve={'secondry'}
                noIcon
                customContainerStyle={layoutContanier}
            >
                <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
                    <View style={topContanier}>
                        <Text style={subTextStyle}>Subscription Options</Text>
                        <Text style={subTextValue}>$X.XX</Text>
                    </View>
                    <View style={payOptionContanier}>
                        <Text style={payTextStyle}>Payment Options</Text>
                    </View>
                    <SubscriptionCard title={'Subscription'} contentTitle={'Yearly Subscription '} leftContent={'$XX.XX Billed annually asa recurring payment'} rightTopContent={'$X.XX'} rightBottomContent={'Per Month'} />
                    <SubscriptionCard contentTitle={'Yearly Subscription '} leftContent={'$XX.XX Billed annually asa recurring payment'} rightTopContent={'$X.XX'} rightBottomContent={'Per Month'} />
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
    topContanier:{
        marginTop: height * 0.07,
        alignItems:'center'
    },
    subTextStyle:{
       ...theme.Theme.regSubscription.subTextStyle
    },
    subTextValue:{
        ...theme.Theme.regSubscription.subTextValue
    },
    payOptionContanier:{
        marginTop: height * 0.07,
        alignItems:'center',
        borderBottomWidth:1,
        paddingBottom:22,
        borderColor:theme.Theme.colors.WHITE,
        marginBottom:20.5
    },
    payTextStyle:{
        ...theme.Theme.regSubscription.payTextStyle
    }
});


export default SubscriptionOption;
