//Navigation
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Keyboard,
  Image
} from 'react-native';
import { colors } from '../themes/colors.js'
import { Header } from '../components'
import { images } from '../constants'

// Sample Screen List
// import HomeScreen from '../screens/homeScreen/homeScreen';
// import TelevetScreen from '../screens/televetScreen/televetScreen';
// import ComunityScreen from '../screens/comunity/comunityScreen';
// import ShoppingScreen from '../screens/shopping/shoppingScreen'
// import MyPetScreen from '../screens/MyPet/myPetScreen'

import HomeScreen from '../screens/homeScreen/homeScreen';
// Telemed screens
import TelevetScreen from '../screens/televetScreen/televetScreen';
import CalenderScreen from '../screens/televetScreen/calenderScreen.js'; 
import PractitionerTypeScren from '../screens/televetScreen/PractitionerTypeScren.js'; 

import ComunityScreen from '../screens/communityScreen/communityScreen';
import ShoppingScreen from '../screens/shoppingScreen/shoppingScreen'
import MyPetScreen from '../screens/myPetScreen/myPetScreen'

//Registration screen
import CreateAccountScreen from '../screens/registrationScreens/createAccountScreen'
import CreateAccountMobile from '../screens/registrationScreens/createAccountMobile'
import TermsConditionScreen from '../screens/registrationScreens/termsConditionScreen'
import PetRegisterForm from '../screens/registrationScreens/petRegisterForm'

//forgotPassword screen
import EmailEnterScreen from '../screens/forgotPasswordScreens/emailEnterScreen'
import OtpHandleScreen from '../screens/forgotPasswordScreens/otpHandleScreen'
import PasswordVerifyScreen from '../screens/forgotPasswordScreens/passwordVerifyScreen'


// Connect redux store.
import { useSelector, useDispatch } from 'react-redux';
import { currentRoute } from '../store/modules/screen/screen'

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ShoppingScreenStack = createStackNavigator();
const ComunityScreenStack = createStackNavigator();
const TelevetScreenStack = createStackNavigator();
const MyPetScreenStack = createStackNavigator();
const RegisterStackScreen = createStackNavigator()
const FogotPasswordStackScreen = createStackNavigator()

const navigationRef = React.createRef();

export const navigate = (name, params) => {
  navigationRef.current && navigationRef.current.navigate(name, params);
};

//Home route
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      {/* <HomeStack.Screen
        name={'HomeScreen'}
        options={{
          header: ({ navigation, scene }) => (<Header title='PET HARMONY' headerColor={colors.RED} />)
        }}
        component={HomeScreen}
      /> */}
       <HomeStack.Screen
        name={'Pet registation'}
        options={{
          header: ({ navigation, scene }) => (<Header title='PET HARMONY' headerColor={colors.RED} />)
        }}
        component={PetRegisterForm}
      />
    </HomeStack.Navigator>
  );
};
//Other route
const TelevetScreenStacks = () => {
  return (
    <TelevetScreenStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <TelevetScreenStack.Screen
        options={{
          header: ({ navigation, scene }) => (<Header title='PET HARMONY' headerColor={colors.RED} />)
        }}
        name="televet"
        component={TelevetScreen}
      />
      <TelevetScreenStack.Screen
        options={{
          header: ({ navigation, scene }) => (<Header title='PET HARMONY' headerColor={colors.RED} />)
        }}
        name="calendar"
        component={CalenderScreen}
      />
      <TelevetScreenStack.Screen
        options={{
          header: ({ navigation, scene }) => (<Header title='PET HARMONY' headerColor={colors.RED} />)
        }}
        name="practitionerType"
        component={PractitionerTypeScren}
      />
    </TelevetScreenStack.Navigator>
  );
};
const ComunityScreenStacks = () => {
  return (
    <ComunityScreenStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <ComunityScreenStack.Screen
        options={{
          header: ({ navigation, scene }) => (<Header title='PET HARMONY' headerColor={colors.RED} />),
        }}
        name="community"
        component={ComunityScreen}
      />
    </ComunityScreenStack.Navigator>
  );
};
const ShoppingScreenStacks = () => {
  return (
    <ShoppingScreenStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <ShoppingScreenStack.Screen
        name="Shopping"
        component={ShoppingScreen}
      />
    </ShoppingScreenStack.Navigator>
  );
};

const MyPetScreenStacks = () => {
  return (
    <MyPetScreenStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <MyPetScreenStack.Screen
        name="My pet"
        component={MyPetScreen}
      />
    </MyPetScreenStack.Navigator>
  );
};


const TabNav = props => {
  const { theme } = useSelector(state => state.theme);
  const { currentScreen } = useSelector(state => state.screen);

  const dispatch = useDispatch()

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
    setKeyboardShow(false)
  };
  const _keyboardDidHide = () => {
    setKeyboardShow(true);
  };

  let currentRouteName = navigationRef.current != null ? navigationRef.current.getCurrentRoute().name : null
  let token = 1


  return (
    <NavigationContainer ref={navigationRef}
      onStateChange={() => {
        currentRouteName = navigationRef.current != null ? navigationRef.current.getCurrentRoute().name : null
        dispatch(currentRoute(currentRouteName))
      }}
    >
      {!token ?
           <RegisterStackScreen.Navigator
           screenOptions={{
             headerShown: false
           }}>
           <RegisterStackScreen.Screen
             name="Create Account"
             component={CreateAccountScreen}
           />
           <RegisterStackScreen.Screen
             name="Create Account Mobile"
             component={CreateAccountMobile}
           />
            <RegisterStackScreen.Screen
             name="Terms Condition"
             component={TermsConditionScreen}
           />
         </RegisterStackScreen.Navigator> 

        // <FogotPasswordStackScreen.Navigator
        //   screenOptions={{
        //     headerShown: false
        //   }}>
        //   <FogotPasswordStackScreen.Screen
        //     name="Email Enter Screen"
        //     component={EmailEnterScreen}
        //   />
        //   <FogotPasswordStackScreen.Screen
        //     name="Otp Handle Screen"
        //     component={OtpHandleScreen}
        //   />
        //    <FogotPasswordStackScreen.Screen
        //     name="Password Verify Screen"
        //     component={PasswordVerifyScreen}
        //   />
        // </FogotPasswordStackScreen.Navigator>
        :
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
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName = route.name;
              let fontStyle;
              let homeImageIcon = images.homeIcon
              let televetIcon = images.televet
              let communityIcon = images.community
              let shoppingIcon = images.shoppingIcon
              let petIcon = images.petsIcon
              if (route.name === 'Home') {
                if (currentScreen === "HomeScreen" || currentScreen === null) {
                  homeImageIcon = images.homeIconRed
                  fontStyle = theme.Theme.bottomIconColor.darkRed
                }
              } else if (route.name === 'Community') {
                if (currentScreen === "community") {
                  communityIcon = images.communityBlue
                  fontStyle = theme.Theme.bottomIconColor.lightBlue
                }
              }
              else if (route.name === 'TeleMed') {
                if (currentScreen === "televet") {
                  televetIcon = images.televetPurple
                  fontStyle = theme.Theme.bottomIconColor.darkPurple
                }
              }
              else if (route.name === 'Shopping') {
                if (currentScreen === "Shopping") {
                  shoppingIcon = images.shoppingIconBlue
                  fontStyle = theme.Theme.bottomIconColor.lightBlue
                }
              }
              else if (route.name === 'My pets') {
                if (currentScreen === "My pet") {
                  petIcon = images.petsIcon
                }
              }
              return (
                <View style={styles(theme).iconContanier}>
                  {didKeyboardShow ? (
                    iconName === 'Home' ? (
                      <Image style={styles(props).iconStyle} source={homeImageIcon} />
                    ) : iconName === 'Shopping' ? (
                      <Image style={styles(props).iconStyle} source={shoppingIcon} />
                    ) : iconName === 'TeleMed' ? (
                      <Image style={styles(props).iconStyle} source={televetIcon} />
                    ) : iconName === 'Community' ? (
                      <Image style={styles(props).iconStyle} source={communityIcon} />
                    ) : (
                      <Image style={styles(props).iconStyle} source={petIcon} />
                    )
                  ) : null}
                  <Text style={{ ...styles(theme).bottemText, color: fontStyle ? fontStyle : theme.Theme.bottomIconColor.black }}>
                    {route.name}
                  </Text>
                </View>
              );
            },
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
          />
          <Tab.Screen
            name="Shopping"
            component={ShoppingScreenStacks}
          />
          <Tab.Screen
            name="TeleMed"
            component={TelevetScreenStacks}
          />
          <Tab.Screen
            name="Community"
            component={ComunityScreenStacks}
          />
          <Tab.Screen
            name="My pets"
            component={MyPetScreenStacks}
          />
        </Tab.Navigator>
      }
    </NavigationContainer>
  );
};
export const styles = props =>
  StyleSheet.create({
    bottemText: {
      fontSize: 6,
      letterSpacing: 0.6,
      marginTop: 5,
      marginBottom: 5,
      textTransform: 'uppercase',
      fontFamily: 'Aqum',
    },
    iconContanier: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5,
    },
    iconStyle: {
      height: Dimensions.get('window').width / 15 * 1,
      width: Dimensions.get('window').width / 15 * 1
    }
  });





export default TabNav;