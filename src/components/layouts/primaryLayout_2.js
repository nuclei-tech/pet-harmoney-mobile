import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import { colors, size } from '../../theme'
import { Header } from '../../components'
import { images } from '../../constants';

const window = Dimensions.get('window');
const Layout2 = (props) => {

    const Inner = props.inner; // Note: variable name _must_ start with a capital letter 
    const curve = props.curve ? props.curve : 'primary'
    const getBackgroundImage = () => {
        let backgroundImage;
        switch (props.layoutColor) {
            case colors.RED:
                backgroundImage = curve == 'primary' ? images.bgRed : images.bgRed2;
                break;
            case colors.BLUE:
                backgroundImage = curve == 'primary' ? images.bgBlue : images.bgBlue2;
                break;
            case colors.DARK_BLUE:
                backgroundImage = curve == 'primary' ? images.bgDBlue : images.bgDBlue2;
                break;
            case colors.YELLOW:
                backgroundImage = images.bgYellow;
                break;
            case colors.GREEN:
                backgroundImage = images.bgGreen;
                break;
            case colors.PURPLE:
                backgroundImage = images.bgPurple;
                break;

            default:
                backgroundImage = images.bgRed
                break;
        }
        return backgroundImage;
    }
    const { fullScreen, halfScreen, noImage, samllScreen } = styles(props)
    const getBackgroundStyle = () => {
        let backgroundStyle;
        switch (props.type) {
            case 'fullScreen':
                backgroundStyle = fullScreen;
                break;
            case 'halfScreen':
                backgroundStyle = halfScreen;
                break;
            case 'small':
                backgroundStyle = samllScreen;
                break;

            default:
                backgroundStyle = fullScreen;
                break;
        }
        return backgroundStyle;
    }

    const backgroundStyle = getBackgroundStyle();

    return (
        <View flex={1}>
            {props.type ? (
            <ImageBackground resizeMode='stretch' source={getBackgroundImage()} style={getBackgroundStyle()}>
                <Header title='PET HARMONY' headerColor={'transparent'} />
                {props.children}
            </ImageBackground>
            ) : (<View  style={noImage}>
                <Header title='PET HARMONY' headerColor={'transparent'} />
                {props.children}
            </View>)}

        </View>


    );
};

const styles = (props) => StyleSheet.create({

    noImage: {
        flex: 1,
        resizeMode: 'stretch',
        padding: size.SIZE.BASE,
        paddingBottom: 0,
        height: '90%',
        backgroundColor: props.backgroundColor ? props.backgroundColor : colors.WHITE
    },
    fullScreen: {
        flex: 1,
        resizeMode: 'stretch',
        padding: size.SIZE.BASE,
        paddingBottom: 0,
        height: '90%',
        backgroundColor: props.backgroundColor ? props.backgroundColor : colors.WHITE
    },
    samllScreen: {
        flex: 1,
        resizeMode: 'stretch',
        padding: size.SIZE.BASE,
        backgroundColor: props.backgroundColor ? props.backgroundColor : colors.WHITE,
        height: '60%',
        paddingBottom: 0,
    },
    halfScreen: {
        flex: 1,
        resizeMode: 'stretch',
        padding: size.SIZE.BASE,
        height: '75%',
        paddingBottom: 0,
        backgroundColor: props.backgroundColor ? props.backgroundColor : colors.WHITE
    }

});




export default Layout2;