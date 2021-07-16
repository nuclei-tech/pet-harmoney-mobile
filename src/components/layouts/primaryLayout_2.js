import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, StatusBar, SafeAreaView } from 'react-native';
import { Header } from '../../components'
import { images } from '../../constants';
import { useSelector } from 'react-redux';

const {width, height} = Dimensions.get('window');
const Layout2 = (props) => {
    const { theme } = useSelector(state => state.theme);
    const colors = theme.Theme.colors;
    // const Inner = props.inner; // Note: variable name _must_ start with a capital letter 
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
                backgroundImage = curve == 'primary' ? images.bgPurple2 : images.bgPurple;
                break;
            case colors.WHITE:
                backgroundImage = images.bgWhiteBackGround;
                break;
            default:
                backgroundImage = images.bgRed
                break;
        }
        return backgroundImage;
    }
    const { fullScreen, halfScreen, noImage, samllScreen } = styles(props, theme.Theme);
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
                <ImageBackground resizeMode='stretch' source={getBackgroundImage()} style={{ ...backgroundStyle, ...props.customStyle }}>
                    {!props.noHeader && <Header  {...props} />}
                    {props.children}
                </ImageBackground>
            ) : (<View style={noImage}>
                 {!props.noHeader && <Header  {...props} />}
                {props.children}
            </View>)}

        </View>


    );
};

const styles = (props, theme) => StyleSheet.create({

    noImage: {
        flex: 1,
        resizeMode: 'stretch',
        padding: theme.size.CONTAINER_PADDING,
        paddingBottom: 0,
        height: '90%',
        backgroundColor: props.backgroundColor ? props.backgroundColor : theme.colors.WHITE
    },
    fullScreen: {
        flex: 1,
        resizeMode: 'stretch',
        padding: theme.size.CONTAINER_PADDING,
        paddingBottom: 0,
        height: props.noHeader ? height*0.65 : height*0.8,
        backgroundColor: props.backgroundColor ? props.backgroundColor : theme.colors.WHITE
    },
    samllScreen: {
        flex: 1,
        resizeMode: 'stretch',
        padding: theme.size.CONTAINER_PADDING,
        backgroundColor: props.backgroundColor ? props.backgroundColor : theme.colors.WHITE,
        height: '60%',
        paddingBottom: 0,
    },
    halfScreen: {
        flex: 1,
        resizeMode: 'stretch',
        padding: theme.size.CONTAINER_PADDING,
        height: '75%',
        paddingBottom: 0,
        backgroundColor: props.backgroundColor ? props.backgroundColor : theme.colors.WHITE
    }

});




export default Layout2;