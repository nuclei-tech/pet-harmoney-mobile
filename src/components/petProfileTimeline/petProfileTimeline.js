import React, {useState} from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Animated, Dimensions} from 'react-native'
import {useSelector} from 'react-redux'

const { width } = Dimensions.get("window");

const ProfileTimeline = ({tabAboutDetails, tabHistoryDetails}) => {
    const [selectedIndex, setSelectedIndex] = useState(0) 
    const { theme } = useSelector(state => state.theme);
    const {tabTitlesStyle, tabTitleContainer, aboutStylesLabel, aboutStylesAnswer} = styles(theme)

    const tabViewHandler = (selectedIndex) => {
        
        switch (selectedIndex) {
            case 0:
                return (
                    <View style={{padding: 29}}>
                        <Text style={aboutStylesLabel}>Age: <Text style={aboutStylesAnswer}>2yrs</Text></Text>
                        <Text style={aboutStylesLabel}>Favorite Park: <Text style={aboutStylesAnswer}>Providence Park</Text></Text>
                        <Text style={aboutStylesLabel}>Favorite Food: <Text style={aboutStylesAnswer}>Purina Pro</Text></Text>
                        <Text style={[aboutStylesLabel, {marginTop: 44}]}>Family & Relationships</Text>
                        <Text style={aboutStylesLabel}>Bruno: <Text style={aboutStylesAnswer}>Bruno</Text></Text>
                    </View>
                )
                break;
            case 1:
                return (
                    <View>
                        <Text>Hello0000 1</Text>
                        <Text>Hello 1</Text>
                    </View>
                )
                break;
            case 2:
                return (
                    <View>
                        <Text>Hello 2</Text>
                        <Text>Hello 2</Text>
                        <Text>Hello 2</Text>
                        <Text>Hello 2</Text>
                    </View>
                )
                break;
            case 3:
                return (
                    <View>
                        <Text>Hello 3</Text>
                    </View>
                )
                break;
            case 4:
                return (
                    <View>
                        <Text>Hello 4</Text>
                        <Text>Hello 4</Text>
                        <Text>Hello 4</Text>
                        <Text>Hello 4</Text>
                        <Text>Hello 4</Text>
                        <Text>Hello 4</Text>
                    </View>
                )
                break;
        
            default:
                break;
        }
    }

    return (
        <>
        <View style={tabTitleContainer}>
            <TouchableOpacity onPress={() => setSelectedIndex(0)}>
                <Text style={[tabTitlesStyle, selectedIndex === 0 && {color: theme.Theme.colors.BLUE}]}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedIndex(1)}>
                <Text style={[tabTitlesStyle, selectedIndex === 1 && {color: theme.Theme.colors.RED}]}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedIndex(2)}>
                <Text style={[tabTitlesStyle, selectedIndex === 2 && {color: theme.Theme.colors.DARK_BLUE}]}>Favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedIndex(3)}>
                <Text style={[tabTitlesStyle, selectedIndex === 3 && {color: theme.Theme.colors.GREEN}]}>Activities</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedIndex(4)}>
                <Text style={[tabTitlesStyle, selectedIndex === 4 && {color: theme.Theme.colors.GREY}]}>Furry Friends</Text>
            </TouchableOpacity>
        </View>
        <View>
           {tabViewHandler(selectedIndex)}
        </View>
        </>
    )
}

const styles = (props) => StyleSheet.create({
    tabTitleContainer: {
        marginTop: 32, 
        flexDirection: 'row', 
        borderTopWidth: 1, 
        borderBottomWidth: 1,
        borderColor: props.Theme.colors.GREY, 
        width: '100%',
        // alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingLeft: 15
    },
    tabTitlesStyle: {
        fontFamily: 'SourceSansPro-Bold',
        fontWeight: '700',
        fontSize: 12,
        lineHeight: 15,
        color: props.Theme.colors.BLACK
    },
    aboutStylesLabel: {
        fontFamily: 'SourceSansPro-Bold',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 18,
        color: props.Theme.colors.BLACK
    },
    aboutStylesAnswer: {
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: '300',
        fontSize: 14,
        lineHeight: 18,
        color: props.Theme.colors.BLACK
    }
})

export default ProfileTimeline