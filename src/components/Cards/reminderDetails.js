import React, {useState, useEffect} from 'react';
import { StyleSheet, View, TouchableNativeFeedback, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { Card, ListItem, Image } from 'react-native-elements';
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
                        style={styles.checkBoxIcon}
                        // PlaceholderContent={<ActivityIndicator />}
                        onPress={() => checkBoxHandlerSelect(index)}
                    />
                </TouchableOpacity>
                }
                {checkBoxExist && selectedItem && selectedItem.length !== 0 && selectedItem.includes(index) &&
                <TouchableOpacity onPress={() => checkBoxHandler(index)}>
                    <Image
                        source={images.reminderDetailCheckedCheckBoxIcon}
                        style={styles.checkBoxIcon}
                        // PlaceholderContent={<ActivityIndicator />}
                        onPress={() => checkBoxHandlerUnselect(index)}
                    />
                </TouchableOpacity>
                }
                <ListItem.Content >
                    <ListItem.Title style={[styles.titleStyle, selectedItem && selectedItem.length !== 0 && selectedItem.includes(index) ? {color: colors.GREEN} : {color: titleColor}, listButtonExist && {fontSize: size.FONT_SIZES.DETAIL_CARD_TITLE_SMALL} ]}>{item.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Content>
                    <ListItem.Title style={[styles.descriptionStyle, {color: descriptionColor}, listButtonExist && {fontSize: size.FONT_SIZES.DETAIL_CARD_TITLE_SMALL}]}>{item.description}</ListItem.Title>
                </ListItem.Content>
                {listButtonExist && <ListItem.Content>
                    <Button onPress={btnPressHandler} customTextStyle={{color: listBtnTxtColor, fontSize: 9}} textColor={listBtnTxtColor} title={listBtnTitle} color={listBtnColor} />
                </ListItem.Content>}
            </ListItem>
            
    )
    
    return (
        <Card containerStyle={{backgroundColor: backgroundColor}}>
            {headerTitle && <Card.Title style={[styles.headerTitleStyle, {color: headerTitleColor}]}>{headerTitle}</Card.Title>}
            <FlatList
                keyExtractor={(item, index) => keyExtractor(item,index)}
                data={dataList}
                renderItem={(item, index) => renderItem(item,index)}
            />
        </Card>

    )

}

const styles = StyleSheet.create({
    checkBoxIcon: { width: 15, height: 15 },
    headerTitleStyle: {
        fontSize: size.FONT_SIZES.DETAIL_CARD_HEADER_TITLE,
        fontWeight: 'bold'
    },
    titleStyle: {
        fontSize: size.FONT_SIZES.DETAIL_CARD_TITLE,
        fontWeight: 'bold'
    },
    descriptionStyle: {
        fontSize: size.FONT_SIZES.DETAIL_CARD_TITLE,
    }
})

export default ReminderDetailsCard