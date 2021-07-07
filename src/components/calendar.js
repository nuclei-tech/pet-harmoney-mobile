//header
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { images } from '../constants'
import {ScheduleTitle} from '../components'
const { width, height } = Dimensions.get('window');
const MonthCalendar = ({ containerStyle, titleStyle }) => {
    const { theme } = useSelector(state => state.theme);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[new Date().getMonth()];
    const selecetdStyle = { selected: true, selectedColor: 'white', width: 29, height: 29, disableTouchEvent: true }
    const [currentMonth, setCurrentMonth] = useState(month)
    const [selecetedDays, setSelecetedDays] = useState(
        {
            '2021-07-05': selecetdStyle,
            '2021-07-10': selecetdStyle,
            '2021-07-12': selecetdStyle,
            '2021-07-16': selecetdStyle,
            '2021-07-17': selecetdStyle,
            '2021-07-18': selecetdStyle,
            '2021-07-22': selecetdStyle,
        }
    );

    const [selecetedDay, setSelecetedDay] = useState({});
    // useEffect(() => {
    //     CalendarItem();
    //     console.log("jjjjjjjjjj");
    //   },[selecetedDays])

    const CalendarItem = () => {
        return (<Calendar
            hideDayNames={true}
            hideExtraDays={true}
            hideArrows={true}
            // monthFormat={'yyyy MM'}
            // calendarBackground={'red'}
            theme={{
                'stylesheet.calendar.header': {
                    week: {
                        marginTop: 5
                    }
                },
                backgroundColor: '#b6c1cd',
                calendarBackground: '#6732C8',
                textSectionTitleColor: '#b6c1cd',
                // textSectionTitleDisabledColor: '#d9e1e8',
                selectedDayBackgroundColor: '#ffffff',
                // todayTextColor: '#00adf5',
                dayTextColor: '#ffffff',
                // textDisabledColor: '#d9e1e8',
                // dotColor: '#00adf5',
                // selectedDotColor: '#ffffff',
                // arrowColor: 'orange',
                // disabledArrowColor: '#d9e1e8',
                monthTextColor: '#ffffff',
                // indicatorColor: 'blue',
                textDayFontFamily: 'Source Sans Pro',
                textMonthFontFamily: 'Source Sans Pro',
                // textMonthColor: '#ffffff',
                // textDayHeaderFontFamily: 'monospace',
                // textDayFontWeight: '300',
                textMonthFontWeight: '700',
                // textDayHeaderFontWeight: '300',
                textDayFontSize: 12,
                textMonthFontSize: 26,
                textDayStyle: {...textDayStyle  },
                selectedDayTextColor: '#6732C8',
                selectedDayBackgroundColor: '#6732C8',
                'stylesheet.calendar.IGNORE': {
                    IGNORE: {
                        width: 29,
                        height: 29
                    }
                }
                // textDayHeaderFontSize: 16
            }}
            // style={{backgroundColor:'transparent'}}
            onDayPress={(day) => {
                let date = day.dateString;
                setSelecetedDay({ [date]: selecetdStyle })
            }}
            markedDates={{ ...selecetedDays, ...selecetedDay }}
            renderHeader={(date) => { return <></>}}
            onMonthChange={(month) => {console.log(month);
                setCurrentMonth(months[month.month-1]);}}
            enableSwipeMonths={true}

        />)
    }
    const {
        container,
        titleContainer,
        heading,
        description,
        monthStyle,
        imageContainer,
        image,
        textDayStyle
    } = styles(theme.Theme);
    return (
        <View style={{ ...container, ...containerStyle }}>
            <View  style={{ ...titleContainer, ...titleStyle }}>
                <ScheduleTitle>Schedule a virtual session</ScheduleTitle>
                <Text style={description}>Click on the solid dates to book an appointment</Text>
            </View>
            <View flex={3}>
                <View>
                    <Text style={monthStyle}>{currentMonth}</Text>
                </View>
                <View>
                    {CalendarItem()}
                </View>
                <View style={imageContainer}>
                    <Image source={images.downArrow} style={image}/> 
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
        marginTop:height*0.07,
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
    },
    monthStyle: {
        fontFamily: 'SourceSansPro-Regular',
        color: theme.colors.WHITE,
        fontWeight: '700',
        textAlign: 'center',
        paddingVertical: 5,
        fontSize: 26,
        lineHeight: 33,
        
        marginTop:height*0.03
    },
    imageContainer:{
        alignItems:"center", 
        padding: height*0.04
    },
    image:{
        width:36,
        height:30
    },
    textDayStyle:{
        borderColor: '#ffffff', 
        alignItems: "center", 
        borderWidth: 3, 
        textAlign:'center',
        fontWeight: '700', 
        borderRadius: 15, 
        width: 29, 
        height: 29, 
        textAlign: 'center', 
        paddingTop:Platform=='ios'? 3.5:6,
        marginTop: 1.5,

    }

})
export default MonthCalendar;