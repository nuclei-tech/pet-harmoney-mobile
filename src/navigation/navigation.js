import React, {useEffect, useState} from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Keyboard,
} from 'react-native';
import {colors} from '../theme'
import {Header} from '../components'
// Screen List
import HomeScreen from '../screens/homeScreen/homeScreen';
import Layout1 from '../screens/layouts/layout1';

// Connect redux store.
import {useSelector, useDispatch} from 'react-redux';

const Tab = createBottomTabNavigator();
const MainStack = createStackNavigator();
const OtherStack = createStackNavigator();
const navigationRef = React.createRef();

//enableScreens(true);

//Navigate any route with params
export const navigate = (name, params) => {
  navigationRef.current && navigationRef.current.navigate(name, params);
};

const headerStyle = {
  elevation: 0,
  shadowOpacity: 0,
};

const headerTitleAlign = {
  headerTitleAlign: 'center',
};

//Tob bar image
function HeaderTitle() {
  return (
    <View>
    <Text>Pet harmony</Text>
    </View>
  );
}

//Header Right side content view
// function HeaderRight(props) {
// }

//Main route
const MaineStackScreen = () => {
  const userToken = useSelector(state => state.auth.token);
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={'HomeScreen'}
        options={{
          header: ({ navigation, scene }) => (<Header title='PET HARMONY' headerColor={colors.RED} />),
          // backgroundColor: nowTheme.COLORS.WHITE
        }} 
        component={HomeScreen}
      />
    </MainStack.Navigator>
  );
};

//Other route
const OtherScreenStack = () => {
  return (
    <OtherStack.Navigator>
      <OtherStack.Screen
        options={{
          header: ({ navigation, scene }) => (<Header title='PET HARMONY' headerColor={colors.RED} />),
          // backgroundColor: nowTheme.COLORS.WHITE
        }} 
        name="Layout1"
        component={Layout1}
      />
    </OtherStack.Navigator>
  );
};

const TabNav = props => {
  const {theme} = useSelector(state => state.theme);
  const [didKeyboardShow, setKeyboardShow] = useState(true);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setKeyboardShow(false);
  };

  const _keyboardDidHide = () => {
    setKeyboardShow(true);
  };

  //reset tab 
  // const resetStackOnTabPress = ({navigation}) => ({
  //   tabPress: e => {
  //     const state = navigation.dangerouslyGetState();

  //     if (state) {
  //       // Grab all the tabs that are NOT the one we just pressed
  //       const nonTargetTabs = state.routes.filter(r => r.key !== e.target);

  //       nonTargetTabs.forEach(tab => {
  //         // Find the tab we want to reset and grab the key of the nested stack
  //         const tabName = tab?.name;
  //         const stackKey = tab?.state?.key;

  //         if (stackKey) {
  //           // Pass the stack key that we want to reset and use popToTop to reset it
  //           navigation.dispatch({
  //             ...StackActions.popToTop(),
  //             target: stackKey,
  //           });
  //         }
  //       });
  //     }
  //   },
  // });

  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
          activeTintColor: theme.Theme.tab.ACTIVE_COLOR,
          inactiveTintColor: theme.Theme.tab.TAB_TEXT_COLOR,
          activeBackgroundColor: theme.Theme.tab.TAB_BACKGROUND,
          inactiveBackgroundColor: theme.Theme.tab.TAB_BACKGROUND,
          style: {
            borderTopColor: theme.Theme.tab.TAB_BACKGROUND,
            backgroundColor: theme.Theme.tab.TAB_BACKGROUND,
            elevation: 0,
            shadowOpacity: 0,
          },
          showLabel: false,
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;
            let iconStyle;
            let fontStyle;

            if (route.name === 'Main') {
              iconName = "Main";
              // iconStyle = focused
              //   ? true add icon styles
              //   : false add icon styles
              // fontStyle = focused
              //   ? true //add font style
              //   : false //add font style
            } else if (route.name === 'Main') {
              iconName = 'Other';
              // iconStyle = focused
              //   ? true add icon styles
              //   : false add icon styles
             // fontStyle = focused
              //   ? true //add font style
              //   : false //add font style
            }
            return (
              <View style={styles(theme).iconContanier}>
                {didKeyboardShow ? (
                  iconName === 'Main' ? (
                    <Text>Main</Text>
                  ) : (
                    <Text>Other</Text>
                  )
                ) : null}
                <Text style={{...styles(theme).bottemText}}>
                  {route.name}
                </Text>
              </View>
            );
          },
        })}
        
        >
        <Tab.Screen
          name="Main"
          component={MaineStackScreen}
        />
        <Tab.Screen
          name="Other"
          component={OtherScreenStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export const styles = props =>
  StyleSheet.create({
    tabColor: {
      backgroundColor: props.Theme.tab.TAB_BACKGROUND,
    },
    imageSize: {
      fontSize: 25,
      marginRight: 20,
    },
    popoverContanier: {
      alignSelf: 'stretch',
      alignItems: 'flex-start',
      width: (Dimensions.get('window').width / 3) * 1.4,
      borderRadius: 10,
      borderColor: props.Theme.popover.BORDER_COLOR,
      borderWidth: 1.2,
      backgroundColor: props.Theme.popover.BACKGROUND_COLOR,
    },
    arrowStyle: {
      marginLeft: -10,
    },
    popoverContent: {
      marginVertical: 15,
      marginHorizontal: 5,
      fontSize: 22,
      width: '100%',
    },
    popoverItem: {
      fontSize: 14,
      fontFamily: 'Lato-Bold',
      color: '#FF01B4',
    },
    bottemText: {
      fontSize: 12,
      letterSpacing: 0.6,
      marginTop: 1,
      marginBottom: 5,
    },
    iconContanier: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    mainContanier: {
      flex: 1,
      //width: (Dimensions.get('window').width / 100) * 65,
      marginTop: (Dimensions.get('window').height / 100) * 8,
      justifyContent: 'center',
      marginHorizontal: 40,
    },
    mainText: {
      fontFamily: 'Lato-Medium',
      fontSize: 20,
      marginBottom: 35,
      marginTop: 5,
    },
  });

export default TabNav;
