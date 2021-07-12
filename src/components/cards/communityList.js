import React from 'react'
import {StyleSheet, View, Text, Image, FlatList} from 'react-native'
import { ListItem } from 'react-native-elements'
import { useSelector } from 'react-redux';

const CommunityList = ({communityDetails}) => {
    const {theme} = useSelector(state => state.theme)
    const {titleStyle, subTitleStyle, container, image, listContentStyle} = styles(theme)

    const keyExtractor = (item,index) => index.toString();

    const renderItem = ({item,index}) => (
        <ListItem containerStyle={[container,communityDetails.length - 1 !== index && { borderBottomWidth: 0.5}]} key={index} bottomDivider={communityDetails.length - 1 !== index ? true : false}>
              <Image style={image} source={item.image} />
              <ListItem.Content style={listContentStyle}>
                <ListItem.Title style={titleStyle}>{item.title} | {item.time}</ListItem.Title>
                <ListItem.Subtitle style={subTitleStyle}>{item.subTitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
    )

      return (
        <View>
        <FlatList 
           keyExtractor={(item, index) => keyExtractor(item,index)}
           data={communityDetails}
           renderItem={(item, index) => renderItem(item,index)}
        />
      </View>
      )
      
      
}

const styles = (props) => StyleSheet.create({
    titleStyle: {
        fontFamily: 'Source Sans Pro',
        fontWeight: '600',
        fontSize: 7,
        lineHeight: 9,
        color: props.Theme.colors.BLUE
    },
    subTitleStyle: {
        fontFamily: 'Source Sans Pro',
        fontWeight: '300',
        fontSize: 7,
        lineHeight: 9,
        color: props.Theme.colors.WHITE
    },
    container : {
        backgroundColor: 'transparent',
        paddingRight: 0,
        paddingLeft: 1,
        paddingVertical: 8
    },
    image: {
        height: 29, 
        width: 29, 
        borderRadius: 30,
    },
    listContentStyle: {
      marginLeft: -7
    }
})

export default CommunityList

