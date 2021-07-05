//header
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';

const { width, height } = Dimensions.get('window');
const Calendar = ({ containerStyle, titleStyle }) => {
    const { theme } = useSelector(state => state.theme);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];;
    let today = new Date();
    let m =today.getMonth();
    const [month, setMonth] = useState(months[6]);

    const onPressDate = () => {
        console.log('in');
    }
    const {
        container,
        titleContainer,
        heading,
        description

    } = styles(theme.Theme);
    return (
        <View style={{ ...container, ...containerStyle }}>
            <View flex={0.75} style={{ ...titleContainer, ...titleStyle }}>
                <Text style={heading}>Schedule a virtual session</Text>
                <Text style={description}>Click on the solid dates to book an appointment</Text>
            </View>
            <View flex={3}>
                <View>
                    <Text>{month}</Text>
                </View>
            </View>
        </View>
    );
};
const styles = (theme) => StyleSheet.create({
    container: {
        flex: 4,
        flexDirection: 'column',
        // marginTop: height * 0.07
    },
    titleContainer: {
        justifyContent: 'center',
    },
    heading: {
        fontFamily: 'Source Sans Pro',
        fontWeight: '700',
        fontSize: 17,
        lineHeight: 21,
        color: theme.colors.WHITE,
        textAlign: 'center',
        paddingVertical: 5
    },
    description: {
        fontFamily: 'SourceSansPro-Regular',
        color: theme.colors.WHITE,
        textAlign: 'center',
        paddingVertical: 5,
        fontSize: 12,
        lineHeight: 15,
    }

})
export default Calendar;