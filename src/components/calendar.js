//header
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';


const { width, height } = Dimensions.get('window');
const MonthCalendar = ({ containerStyle, titleStyle }) => {
    const { theme } = useSelector(state => state.theme);

    const [selecetedDays, setSelecetedDays] = useState(
        {
            '2021-07-05': { selected: true },
            '2021-07-10': { selected: true },
            '2021-07-12': { selected: true },
            '2021-07-16': { selected: true },
            '2021-07-17': { selected: true },
            '2021-07-18': { selected: true },
            '2021-07-22': { selected: true },
        }
    );

    const onPressDate = () => {
        console.log('in');
    }
    const {
        container,
        titleContainer,
        heading,
        description,
        monthStyle

    } = styles(theme.Theme);
    return (
        <View style={{ ...container, ...containerStyle }}>
            <View flex={0.75} style={{ ...titleContainer, ...titleStyle }}>
                <Text style={heading}>Schedule a virtual session</Text>
                <Text style={description}>Click on the solid dates to book an appointment</Text>
            </View>
            <View flex={3}>
                <View>
                    {/* <Text style={monthStyle}>{month}</Text> */}
                </View>
                <View>
                    <Calendar
                        hideDayNames={true}
                        hideExtraDays={true}
                        hideArrows={true}
                        // calendarBackground={'red'}
                        theme={{
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
                            textDayStyle: { borderColor: '#ffffff', alignItems: "center", borderWidth: 3, padding: 8, fontWeight: '700', borderRadius: 20, width: 33, height: 33, textAlign: 'center', marginTop: 0 },
                            selectedDayTextColor: '#b6c1cd',
                            // textDayHeaderFontSize: 16
                        }}
                        // style={{backgroundColor:'transparent'}}
                        onDayPress={(day) => {
                            let date = day.dateString;
                            console.log(selecetedDays);
                        }}
                        markedDates={selecetedDays}
                    />
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
    },
    monthStyle: {
        fontFamily: 'SourceSansPro-Regular',
        color: theme.colors.WHITE,
        fontWeight: '700',
        textAlign: 'center',
        paddingVertical: 5,
        fontSize: 26,
        lineHeight: 33,
    }

})
export default MonthCalendar;