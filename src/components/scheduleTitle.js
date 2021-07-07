//header
import React from 'react';
import { Children } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
const ScheduleTitle = (props) => {
   
    const { theme } = useSelector(state => state.theme);
    const {
        heading
       
    } = styles(theme.Theme);
    return (
        <View >
          
                <Text style={heading}>{props.children}</Text>
               
        </View>
    );
};
const styles = (theme) => StyleSheet.create({
   
    heading: {
        fontFamily: 'Source Sans Pro',
        fontWeight: '700',
        fontSize: 17,
        lineHeight: 21,
        color: theme.colors.WHITE,
        textAlign: 'center',
        paddingVertical: 5
    },
    
})
export default ScheduleTitle;