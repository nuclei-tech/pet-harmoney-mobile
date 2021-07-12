import React from 'react'
import {StyleSheet, View, Text, ActivityIndicator, TouchableOpacity} from 'react-native'
import { Image } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { ProfilePicture } from '../../components'

const MyPetsTab = ({
    tabDetails,
    containerMarginTop,
    containerMarginBottom,
    
}) => {

    const {theme} = useSelector(state => state.theme)
    const {titleTextStyle, mainContainerHorizontal, titleStyles, mainContainer, proPicStyles} = styles(theme)
    const containerStyles = {marginTop: containerMarginTop, marginBottom: containerMarginBottom}

    return (
        <View style={mainContainer}>
            <Text style={titleStyles}>My Pets</Text>
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
    }
})

export default MyPetsTab