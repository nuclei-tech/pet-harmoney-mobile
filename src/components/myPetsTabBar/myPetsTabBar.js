import React from 'react'
import {StyleSheet, View, Text, ActivityIndicator, TouchableOpacity} from 'react-native'
import { Image, Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { ProfilePicture, ReminderButton } from '../../components'

const MyPetsTab = ({
    tabDetails,
    containerMarginTop,
    containerMarginBottom,
    
}) => {

    const {theme} = useSelector(state => state.theme)
    const {titleTextStyle, mainContainerHorizontal, iconOuterContainer, titleStyles, mainContainer, proPicStyles, addIconContainer, titleAfterIcon} = styles(theme)
    const containerStyles = {marginTop: containerMarginTop, marginBottom: containerMarginBottom}

    return (
        <View style={mainContainer}>
            <View style={addIconContainer}>
                <Text style={[titleStyles, titleAfterIcon]}>My Pets</Text>
                <TouchableOpacity>
                <View style={iconOuterContainer}>
                        <Icon
                            name="plus"
                            size={theme.Theme.size.BASE*1.2}
                            color={theme.Theme.colors.BLACK}
                            type='ant-design'
                        />
                </View>
                </TouchableOpacity>
            </View>
            
        <View style={[mainContainerHorizontal, containerStyles]}>
            {
                tabDetails.map((item, index) => {
                    return (
                        <TouchableOpacity key={index}>
                            <View style={{alignItems: 'center'}}>
                               
                                <ProfilePicture
                                        useInTabs
                                        useInTabsNavigationScreen={'Pet Details Timeline'}
                                        petImage={item.image}
                                        customStyle={proPicStyles}
                                />
                                <Text style={[titleTextStyle]}>{item.name}</Text>
                            </View>
                            
                        </TouchableOpacity>
                    )
                })
            }
            
        </View>
        </View>
             
    )
}

const styles = (props) => StyleSheet.create({
    titleTextStyle: {
        marginTop: 10,
        ...props.Theme.myPetTabFontStyles
    },
    mainContainerHorizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 61, 
        marginBottom: 35
    },
    titleStyles: {
        ...props.Theme.myPetTitleFonStyles,
        marginBottom: 28,
        marginTop: 14
    },
    mainContainer: {
        marginBottom: 36
    },
    proPicStyles: {
        height: 79, 
        width: 79, 
        borderWidth: 2
    },

    //add pet icon
    addIconContainer: {
        flexDirection: 'row',
     justifyContent: 'space-between', 
     alignItems: 'center'
    },
    titleAfterIcon: {
        textAlign: 'center', 
        flex: 1, 
        marginLeft: 70
    },
    iconOuterContainer: {
        width: 30, 
        backgroundColor: 'white', 
        borderRadius: 50, 
        alignSelf: 'center', 
        marginRight: 40, 
        marginBottom: 20
    },
})

export default MyPetsTab