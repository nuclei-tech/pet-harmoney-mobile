import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { colors } from '../../theme'
import { Svg, Path, Ellipse } from 'react-native-svg';
// Connect redux store.

const window = Dimensions.get('window');
const Layout = props => {


    return (
        <View style={styles.container}>
            <View>
            </View>

            <View>
                <Svg style={styles.containerStyle}>
                    <Path
                        d="M -250  378.5C-150 -502.5 -242.5 383 223 89C447.5 -45 603 344 863 344H0C0 644 -66.5 0 0 0Z"
                        fill="white"
                        stroke="white"

                    />

                </Svg>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: colors.RED,
        justifyContent: 'space-between',

    },
    containerStyle: {
        height: 244
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        width: '100%'
    }

});




export default Layout;