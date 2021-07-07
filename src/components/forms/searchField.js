import React, { useState, useEffect } from 'react'
import { StyleSheet, TextInput, View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';
import { images } from '../../constants'

//textFieldWidth
//alignText



const SearchField = ({ customMainContanier, customTextStyle, placeholderColor, placeholder, customviewTabContanier, customMainFlex, customSearchFlex, customSearchIconFlex,customItemViewContanier,customListTextField}, props) => {
    const { theme } = useSelector(state => state.theme);
    const [values, setValue] = useState('')
    const [viewTab, setViewTab] = useState(false)
    const [searchDetails, setSearchDetails] = useState([{ name: 'Search reasult1' }, { name: 'Search reasult2' }, { name: 'Search reasult3' }, { name: 'Search reasult5' }, { name: 'Search reasult6' }, { name: 'Search reasult7' }, { name: 'Search reasult8' }, { name: 'Search reasult' }, { name: 'Search reasult' }, { name: 'Search reasult' }, { name: 'Search reasult' }, { name: 'Search reasult' }, { name: 'Search reasult' }, { name: 'Search reasult' }, { name: 'Search reasult' }, { name: 'Search reasult' }, { name: 'Search reasult' }, { name: 'Search reasult' }])
    const { mainTextStyles, listTextField, viewTabContanier, mainFlex, searchFlex, searchIconFlex,flexRowHandle,itemViewContanier } = styles(theme, props)

    const searchTest = async (value) => {
        setValue(value)
        setViewTab(true)
        // if value have setViewTab(true)
    }

    const handleSearch = async (value) => {
        //when search result cleck handle navigation or other
        setValue(value)
    }

    const ItemView = ({ item }) => {
        return (
            <View >
                <TouchableOpacity onPress={() => handleSearch(item.name)}>
                    <View style={{...itemViewContanier,customItemViewContanier }}>
                        <Text style={{ ...listTextField,customListTextField }}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={{ ...mainFlex, customMainFlex }}>
            <View style={flexRowHandle}>
                <View style={{ ...searchFlex, ...customSearchFlex }}>
                    <TextInput
                        style={{ ...mainTextStyles, ...customTextStyle, ...customMainContanier }}
                        placeholder={placeholder}
                        placeholderTextColor={placeholderColor ? placeholderColor : theme.Theme.defaultInputStyle.placeHolderColor}
                        onChangeText={text => {
                            searchTest(text);
                        }}
                        value={values}
                    />
                </View>
                <View style={{ ...searchIconFlex, ...customSearchIconFlex }}>
                    <TouchableOpacity onPress={() => handleSearch(values)}>
                        <Image source={images.searchRoundIcon} resizeMode={'contain'} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={flexRowHandle}>
            <View style={{ ...searchFlex, ...customSearchFlex }}>
                {viewTab ?
                    <View style={{ ...viewTabContanier, ...customviewTabContanier }}>
                        <FlatList
                            data={searchDetails}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={ItemView}
                            nestedScrollEnabled={true}
                            keyboardShouldPersistTaps="always"
                        />
                    </View> : null
                }
            </View>
            <View style={{ ...searchIconFlex, ...customSearchIconFlex }}>
            </View>
            </View>
        </View>
    )
}

const styles = (theme, props) => StyleSheet.create({
    mainTextStyles: {
        ...theme.Theme.searchFieldStyle.textStyle,
        textAlign: props.alignText ? props.alignText : 'left',
        color: theme.Theme.searchFieldStyle.textColor,
        paddingHorizontal: 20,
        borderColor: theme.Theme.searchFieldStyle.boderColor,
        borderWidth: 2,
        width: props.textFieldWidth ? props.textFieldWidth : '100%',
        borderRadius: 100,
        paddingTop: 8,
        paddingBottom: 8,
        marginTop: 9,
        marginBottom: 5
    },
    flexRowHandle:{
        flexDirection: 'row',
    },
    mainFlex: {
        flex: 5,
    },
    searchFlex: {
        flex: 4
    },
    searchIconFlex: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listTextField: {
        ...theme.Theme.searchFieldStyle.listTextField,
    },
    viewTabContanier: {
        position: 'relative',
        maxHeight: 150,
        zIndex: 1,
        borderColor: theme.Theme.searchFieldStyle.boderColor,
        borderWidth: 1,
        backgroundColor: theme.Theme.colors.WHITE,
        overflow: 'scroll',
        width: '100%',
        alignContent: 'center',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
    },
    itemViewContanier:{
        marginVertical: 5
    }
})

export default SearchField