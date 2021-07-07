import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Layout2, InputField, MediumContanier, ProfilePicture, Button } from '../../components'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from 'date-fns';
import {images,birthYearReverse} from '../../constants'

import { styles } from './styles';

// Connect redux store.
import { useSelector } from 'react-redux';


const PetRegisterForm = props => {
    const { theme } = useSelector(state => state.theme);
    const { container, mediumContanierStyle, profileText, flexRowMain, colorField, breedContanier, genderContanier, spayContanier, addButtonContanier,imageStyle } = styles(theme)



    const [petName, setPetName] = useState('')
    const [species, setSpecies] = useState('')
    const [breed, setBreed] = useState('')
    const [petColor, setPetColor] = useState('')
    const [birthday, setBirthday] = useState('')
    const [gender, setGender] = useState('')
    const [spay, setSpay] = useState('')
    const [recode, setRecode] = useState('')
    const [dataView, setDateView] = useState(false)
    const [defaultDate, setDefaultDate] = useState('')


    useEffect(() => {
        let defaultDate = new Date()
        let year = defaultDate.getFullYear()
        let month = defaultDate.getMonth()
        let day = defaultDate.getDate()
        defaultDate.setFullYear(year - birthYearReverse, month, day);
        setDefaultDate(defaultDate)
    }, [])

    setStartDateHandler = (date) => {
        
        let formatDate = format(date, 'yyyy-MM-dd')
        setDateView(false)
        if (date) {
            setBirthday(formatDate)
        } else {
            setBirthday('')
        }
    };
    onBlurDateTimeCloseHandler = () => {
        setDateView(false)
    };

    return (
        <View style={container}>
            <Layout2
                type={'fullScreen'} // {halfScreen, small }
                layoutColor={theme.Theme.colors.RED}
                backgroundColor={theme.Theme.colors.WHITE}
                title={'pet harmony'}
                curve={'secondry'}
            >
                <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
                    <MediumContanier customContainStyle={mediumContanierStyle}>
                        <View style={{ alignItems: 'center' }}>
                            <ProfilePicture customImage={images.defaultProfileImage} customStyle={imageStyle} />
                            <Text style={profileText}>Add a profile picture for your pet</Text>
                        </View>
                        <View style={container}>
                            <InputField
                                onChangeText={text => setPetName(text)}
                                value={petName}
                                boderColor={theme.Theme.colors.WHITE}
                                placeholder={'Pet Name'}
                                placeholderColor={theme.Theme.colors.WHITE}
                                backgroundColor={theme.Theme.colors.RED} textColor={theme.Theme.colors.WHITE}
                            />

                            <InputField
                                onChangeText={text => setSpecies(text)}
                                value={species} boderColor={theme.Theme.colors.WHITE}
                                placeholder={'Species'}
                                placeholderColor={theme.Theme.colors.WHITE}
                                backgroundColor={theme.Theme.colors.RED} textColor={theme.Theme.colors.WHITE}
                            />

                            <View style={flexRowMain}>
                                <View style={breedContanier}>
                                    <InputField
                                        onChangeText={text => setBreed(text)}
                                        value={breed}
                                        boderColor={theme.Theme.colors.WHITE}
                                        placeholder={'Breed'}
                                        placeholderColor={theme.Theme.colors.WHITE}
                                        backgroundColor={theme.Theme.colors.RED} textColor={theme.Theme.colors.WHITE}
                                    />
                                </View>
                                <View style={colorField}>
                                    <InputField
                                        onChangeText={text => setPetColor(text)}
                                        value={petColor} boderColor={theme.Theme.colors.WHITE}
                                        placeholder={'Color'}
                                        placeholderColor={theme.Theme.colors.WHITE}
                                        backgroundColor={theme.Theme.colors.RED} textColor={theme.Theme.colors.WHITE} />
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => setDateView(true)}>
                                <InputField
                                    onChangeText={text => setBirthday(text)}
                                    value={birthday}
                                    boderColor={theme.Theme.colors.WHITE}
                                    placeholder={'Birthdate'}
                                    placeholderColor={theme.Theme.colors.WHITE}
                                    backgroundColor={theme.Theme.colors.RED} textColor={theme.Theme.colors.WHITE}
                                    onTouchStart={() => setDateView(true)}
                                    showSoftInputOnFocus={false}
                                    editable={Platform.OS === 'ios' ? false : false}
                                />
                            </TouchableOpacity>
                            <View style={flexRowMain}>
                                <View style={genderContanier}>
                                    <InputField
                                        onChangeText={text => setGender(text)}
                                        value={gender}
                                        boderColor={theme.Theme.colors.WHITE}
                                        placeholder={'Gender'}
                                        placeholderColor={theme.Theme.colors.WHITE}
                                        backgroundColor={theme.Theme.colors.RED} textColor={theme.Theme.colors.WHITE} />
                                </View>
                                <View style={spayContanier}>
                                    <InputField
                                        onChangeText={text => setSpay(text)}
                                        value={spay}
                                        boderColor={theme.Theme.colors.WHITE}
                                        placeholder={'Spay/Neuter'}
                                        placeholderColor={theme.Theme.colors.WHITE}
                                        backgroundColor={theme.Theme.colors.RED} textColor={theme.Theme.colors.WHITE} />
                                </View>
                            </View>

                            <InputField
                                onChangeText={text => setRecode(text)}
                                value={recode}
                                boderColor={theme.Theme.colors.WHITE}
                                placeholder={'Vet Records'}
                                placeholderColor={theme.Theme.colors.WHITE}
                                backgroundColor={theme.Theme.colors.RED} textColor={theme.Theme.colors.WHITE} />
                        </View>

                        <View style={addButtonContanier}>
                            <Button buttonWidth={145} backgroundColor={theme.Theme.colors.RED} textColor={theme.Theme.colors.WHITE} title={'Add Pet'} />
                        </View>
                    </MediumContanier>

                    <DateTimePickerModal
                        isVisible={dataView}
                        onConfirm={setStartDateHandler}
                        mode="date"
                        onCancel={onBlurDateTimeCloseHandler}
                        display="spinner"
                        date={new Date(birthday ? birthday : defaultDate)}
                    />

                </ScrollView>
            </Layout2>
        </View>
    );
};




export default PetRegisterForm;
