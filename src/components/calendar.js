//header
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { useSelector } from 'react-redux';


const Calendar = ({customContainerStyle }) => {
    const { theme } = useSelector(state => state.theme);
    const onPressDate = () => {
        console.log('in');
    }
    const {
        container,

    } = styles(theme.Theme);
    return (
        <View style={{ ...container, ...customContainerStyle }}>
            
        </View>
    );
};
const styles = (theme) => StyleSheet.create({
    container: {
        flex: 1
    },
  
})
export default Calendar;