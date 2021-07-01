import React from 'react'
import {StyleSheet, View, Text, ActivityIndicator, TouchableOpacity} from 'react-native'
import { Image } from 'react-native-elements';
import { useSelector } from 'react-redux';

const IconHeader = ({
    tabDetails
}) => {

    const {theme} = useSelector(state => state.theme)
    const {titleTextStyle, mainContainerHorizontal, secondaryImage} = styles(theme)

    return (
        
        <View style={mainContainerHorizontal}>
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
        marginBottom: 35,
        marginTop: 61
    },
    secondaryImage: {
        width: 48.44,
        height: 48.44,
    },
})

export default IconHeader