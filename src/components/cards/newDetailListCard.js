import React, {useState, useEffect} from 'react';
import { StyleSheet, View, TouchableNativeFeedback, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { Card, ListItem, Image } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { images } from '../../constants'
import { Button } from '../../components'

const ReminderDetailsCard = ({
    backgroundColor, 
    titleColor, 
    descriptionColor, 
    borderBottomColor, 
    headerTitleColor,
    headerTitle,
    dataList, 
    checkBoxExist,
    listButtonExist,
    listBtnTitle,
    listBtnColor,
    listBtnTxtColor
}) => {
    const {theme} = useSelector(state => state.theme)
    const {checkBoxIcon, headerTitleStyle, titleStyle, descriptionStyle, listButtonText, listButtonContainer} = styles(theme)

    const [selectedItem, setSelectedItem] = useState([])

    // useEffect(() => {

    // }, [selectedItem])

    const btnPressHandler = () => {
        console.warn('btnClicked');
    }

    const checkBoxHandlerSelect = (SelectedIndex) => {
        // selectedItem.push(SelectedIndex)
        setSelectedItem([...selectedItem, SelectedIndex])
    }

    const checkBoxHandlerUnselect = (SelectedIndex) => {
        // setSelectedItem(SelectedIndex)
        const newSelectedItems = selectedItem.filter(value => value !== SelectedIndex)
        setSelectedItem(newSelectedItems)
    }

    const keyExtractor = (item,index) => index.toString();

    const renderItem = ({item,index}) => (
        
            <ListItem containerStyle={{backgroundColor: backgroundColor, borderBottomColor: borderBottomColor, borderBottomWidth: index !== dataList.length - 1 ? 0.5 : 0, padding: 0}}>
                
               {checkBoxExist && (selectedItem && !selectedItem.includes(index)) &&
               <TouchableOpacity onPress={() => checkBoxHandler(index)}>
                    <Image
                        source={images.reminderDetailCheckBoxIcon}
                        style={checkBoxIcon}
                        // PlaceholderContent={<ActivityIndicator />}
                        onPress={() => checkBoxHandlerSelect(index)}
                    />
                </TouchableOpacity>
                }
                {checkBoxExist && selectedItem && selectedItem.length !== 0 && selectedItem.includes(index) &&
                <TouchableOpacity onPress={() => checkBoxHandler(index)}>
                    <Image
                        source={images.reminderDetailCheckedCheckBoxIcon}
                        style={checkBoxIcon}
                        // PlaceholderContent={<ActivityIndicator />}
                        onPress={() => checkBoxHandlerUnselect(index)}
                    />
                </TouchableOpacity>
                }
                <ListItem.Content >
                    <ListItem.Title style={[titleStyle, selectedItem && selectedItem.length !== 0 && selectedItem.includes(index) ? {color: theme.Theme.colors.GREEN} : {color: titleColor}, listButtonExist && {fontSize: theme.Theme.size.DETAIL_CARD_TITLE_SMALL} ]}>{item.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Content>
                    <ListItem.Title style={[descriptionStyle, {color: descriptionColor}]}>{item.type ? `${item.description} | ${item.type}` : item.description}</ListItem.Title>
                </ListItem.Content>
                {listButtonExist && <ListItem.Content>
                    <Button onPress={btnPressHandler} customTextStyle={listButtonText} buttonContainStyle={listButtonContainer} buttonType={'small'} textColor={listBtnTxtColor} title={listBtnTitle} backgroundColor={listBtnColor} />
                </ListItem.Content>}
            </ListItem>
            
    )
    
    return (
        <View style={{marginTop: 25, marginBottom: 20}}>
            {headerTitle && <Card.Title style={[headerTitleStyle, {color: headerTitleColor}]}>{headerTitle}</Card.Title>}
            <FlatList
                keyExtractor={(item, index) => keyExtractor(item,index)}
                data={dataList}
                renderItem={(item, index) => renderItem(item,index)}
            />
        </View>
    )

}

const styles = (props) => StyleSheet.create({
    checkBoxIcon: { width: 15, height: 15 },
    headerTitleStyle: {
        fontSize:  props.Theme.size.DETAIL_CARD_HEADER_TITLE,
        fontWeight: 'bold'
    },
    titleStyle: {
        fontFamily: 'Source Sans Pro',
        fontWeight: 'bold',
        fontSize: 11.5,
        lineHeight: 14
    },
    descriptionStyle: {
        fontFamily: 'Source Sans Pro',
        fontWeight: 'normal',
        fontSize: 11.5,
        lineHeight: 14
    },
    listButtonText: {
        fontFamily: 'SourceSansPro-Bold',
        fontWeight: '700',
        fontSize: 9,
        lineHeight: 9,
        paddingVertical: 0
    },
    listButtonContainer: {width: 73, height: 22, alignSelf: 'flex-end'}
})

export default ReminderDetailsCard