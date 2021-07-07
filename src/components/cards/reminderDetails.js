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
    const {checkBoxIcon, headerTitleStyle, titleStyle, descriptionStyle} = styles(theme)

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
        
            <ListItem bottomDivider={index !== dataList.length - 1 ? true : false} containerStyle={{backgroundColor: backgroundColor, borderBottomColor: borderBottomColor}}>
                
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
                    <ListItem.Title style={[descriptionStyle, {color: descriptionColor}, listButtonExist && {fontSize: theme.Theme.size.DETAIL_CARD_TITLE_SMALL}]}>{item.description}</ListItem.Title>
                </ListItem.Content>
                {listButtonExist && <ListItem.Content>
                    <Button onPress={btnPressHandler} buttonType={'small'} textColor={listBtnTxtColor} title={listBtnTitle} backgroundColor={listBtnColor} />
                </ListItem.Content>}
            </ListItem>
            
    )
    
    return (
        <Card containerStyle={{backgroundColor: backgroundColor}}>
            {headerTitle && <Card.Title style={[headerTitleStyle, {color: headerTitleColor}]}>{headerTitle}</Card.Title>}
            <FlatList
                keyExtractor={(item, index) => keyExtractor(item,index)}
                data={dataList}
                renderItem={(item, index) => renderItem(item,index)}
            />
        </Card>

    )

}

const styles = (props) => StyleSheet.create({
    checkBoxIcon: { width: 15, height: 15 },
    headerTitleStyle: {
        fontSize:  props.Theme.size.DETAIL_CARD_HEADER_TITLE,
        fontWeight: 'bold'
    },
    titleStyle: {
        fontSize: props.Theme.size.DETAIL_CARD_TITLE,
        fontWeight: 'bold'
    },
    descriptionStyle: {
        fontSize: props.Theme.size.DETAIL_CARD_TITLE,
    }
})

export default ReminderDetailsCard