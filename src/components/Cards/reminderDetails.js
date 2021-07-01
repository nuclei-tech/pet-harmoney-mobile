import React, {useState, useEffect} from 'react';
import { StyleSheet, View, TouchableNativeFeedback, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { Card, ListItem, Image } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { images } from '../../constants'
import { size, colors } from '../../theme'
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
                        style={styles(theme).checkBoxIcon}
                        // PlaceholderContent={<ActivityIndicator />}
                        onPress={() => checkBoxHandlerSelect(index)}
                    />
                </TouchableOpacity>
                }
                {checkBoxExist && selectedItem && selectedItem.length !== 0 && selectedItem.includes(index) &&
                <TouchableOpacity onPress={() => checkBoxHandler(index)}>
                    <Image
                        source={images.reminderDetailCheckedCheckBoxIcon}
                        style={styles(theme).checkBoxIcon}
                        // PlaceholderContent={<ActivityIndicator />}
                        onPress={() => checkBoxHandlerUnselect(index)}
                    />
                </TouchableOpacity>
                }
                <ListItem.Content >
                    <ListItem.Title style={[styles(theme).titleStyle, selectedItem && selectedItem.length !== 0 && selectedItem.includes(index) ? {color: colors.GREEN} : {color: titleColor}, listButtonExist && {fontSize: size.FONT_SIZES.DETAIL_CARD_TITLE_SMALL} ]}>{item.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Content>
                    <ListItem.Title style={[styles(theme).descriptionStyle, {color: descriptionColor}, listButtonExist && {fontSize: size.FONT_SIZES.DETAIL_CARD_TITLE_SMALL}]}>{item.description}</ListItem.Title>
                </ListItem.Content>
                {listButtonExist && <ListItem.Content>
                    <Button onPress={btnPressHandler} buttonType={'small'} customTextStyle={{color: listBtnTxtColor}} title={listBtnTitle} color={listBtnColor} />
                </ListItem.Content>}
            </ListItem>
            
    )
    
    return (
        <Card containerStyle={{backgroundColor: backgroundColor}}>
            {headerTitle && <Card.Title style={[styles(theme).headerTitleStyle, {color: headerTitleColor}]}>{headerTitle}</Card.Title>}
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
        fontSize:  props.theme.Theme.size.DETAIL_CARD_HEADER_TITLE,
        fontWeight: 'bold'
    },
    titleStyle: {
        fontSize: props.theme.Theme.size.DETAIL_CARD_TITLE,
        fontWeight: 'bold'
    },
    descriptionStyle: {
        fontSize: props.theme.Theme.size.DETAIL_CARD_TITLE,
    }
})

export default ReminderDetailsCard