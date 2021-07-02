import React from 'react'
import {StyleSheet, View, Text, ActivityIndicator, TouchableOpacity} from 'react-native'
import { Image } from 'react-native-elements';
import { useSelector } from 'react-redux';

const IconTabHeader = ({
    tabDetails,
    containerMarginTop,
    containerMarginBottom
}) => {

    const {theme} = useSelector(state => state.theme)
    const {titleTextStyle, mainContainerHorizontal, secondaryImage} = styles(theme)
    const containerStyles = {marginTop: containerMarginTop, marginBottom: containerMarginBottom}

    return (
        
        <View style={[mainContainerHorizontal, containerStyles]}>
            {
                tabDetails.map((item, index) => {
                    return (
                        <TouchableOpacity key={index}>
                            <View style={{alignItems: 'center'}}>
                                <Image
                                        source={item.image}
                                        style={secondaryImage}
                                        PlaceholderContent={<ActivityIndicator />}
                                />
                                <Text style={[titleTextStyle]}>{item.title}</Text>
                            </View>
                            
                        </TouchableOpacity>
                    )
                })
            }
            
        </View>
    )
}

const styles = (props) => StyleSheet.create({
    titleTextStyle: {
        marginTop: 7,
        ...props.Theme.tabIconHeaderFontStyles
    },
    mainContainerHorizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    secondaryImage: {
        width: 48.44,
        height: 48.44,
    },
})

export default IconTabHeader