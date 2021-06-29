import React from 'react';
import { StyleSheet, View, TouchableNativeFeedback, ActivityIndicator, FlatList } from 'react-native';
import { Card, ListItem, Image } from 'react-native-elements';
import { images } from '../../constants'
import { size } from '../../theme'
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

    const keyExtractor = (item,index) => index.toString();

    const renderItem = ({item,index}) => (
        
            <ListItem bottomDivider={index !== dataList.length - 1 ? true : false} containerStyle={{backgroundColor: backgroundColor, borderBottomColor: borderBottomColor}}>
               {checkBoxExist && <Image
                    source={images.reminderDetailCheckBoxIcon}
                    style={styles.checkBoxIcon}
                    // PlaceholderContent={<ActivityIndicator />}
                />}
                <ListItem.Content >
                    <ListItem.Title style={[styles.titleStyle, {color: titleColor}, listButtonExist && {fontSize: size.FONT_SIZES.DETAIL_CARD_TITLE_SMALL} ]}>{item.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Content>
                    <ListItem.Title style={[styles.descriptionStyle, {color: descriptionColor}, listButtonExist && {fontSize: size.FONT_SIZES.DETAIL_CARD_TITLE_SMALL}]}>{item.description}</ListItem.Title>
                </ListItem.Content>
                {listButtonExist && <ListItem.Content>
                    <Button customTextStyle={{color: listBtnTxtColor, fontSize: 9}} textColor={listBtnTxtColor} title={listBtnTitle} color={listBtnColor} />
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