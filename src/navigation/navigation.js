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
  Image,
  Platform,
  Animated
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
import PractitionerScren from '../screens/televetScreen/PractitionerScren.js'; 

import ComunityScreen from '../screens/communityScreen/communityScreen';
import ShoppingScreen from '../screens/shoppingScreen/shoppingScreen'
import MyPetScreen from '../screens/myPetScreen/myPetScreen'
import PetVisitDetailScreen from '../screens/petVisitDetailScreen/petVisitDetailScreen';

//Registration screen
import CreateAccountScreen from '../screens/registrationScreens/createAccountScreen'
import CreateAccountMobile from '../screens/registrationScreens/createAccountMobile'
import TermsConditionScreen from '../screens/registrationScreens/termsConditionScreen'
import PetRegisterForm from '../screens/registrationScreens/petRegisterForm'
import SubscriptionOption from '../screens/registrationScreens/subscriptionOption'
import SelectSubOption from '../screens/registrationScreens/subscriptionSelectScreen'

//forgotPassword screen
import EmailEnterScreen from '../screens/forgotPasswordScreens/emailEnterScreen'
import OtpHandleScreen from '../screens/forgotPasswordScreens/otpHandleScreen'
import PasswordVerifyScreen from '../screens/forgotPasswordScreens/passwordVerifyScreen'


//reminder screen 
import RemindSession from '../screens/reminderScreens/reminderSession'

//time line screens
import Reminders from '../screens/reminderScreens/reminders'

//extra screens
import MyCart from '../screens/myCardScreens/myCartScreen' 
import MyCartOrder from '../screens/myCardScreens/myCartOrderScreen'


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

const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
      : 0
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.width, // Focused, but offscreen in the beginning
                0, // Fully focused
                screen.width * -0.3, // Fully unfocused
              ],
              extrapolate: 'clamp',
            }),
            inverted
          ),
        },
      ],
    },
  };
};

//Home route
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <HomeStack.Screen
        name={'HomeScreen'}
        options={{
          header: ({ navigation, scene }) => (<Header title='PET HARMONY' headerColor={colors.RED} />)
        }}
        component={HomeScreen}
      />
       <HomeStack.Screen
        name={'Pet registation'}
        options={{
          header: ({ navigation, scene }) => (<Header title='PET HARMONY' headerColor={colors.RED} />)
        }}
        component={PetRegisterForm}
      />
       <HomeStack.Screen
        name={'Subscription Option'}
        options={{
          header: ({ navigation, scene }) => (<Header title='PET HARMONY' headerColor={colors.RED} />)
        }}
        component={SubscriptionOption}
      />
      <HomeStack.Screen
        name={'Select Subcription Option'}
        options={{
          header: ({ navigation, scene }) => (<Header title='PET HARMONY' headerColor={colors.RED} />)
        }}
        component={SelectSubOption}
      />

      {/* <HomeStack.Screen
        name={'My Cart'}
        options={{
          header: ({ navigation, scene }) => (<Header title='PET HARMONY' headerColor={colors.RED} />)
        }}
        component={MyCart}
      />
      {/* <HomeStack.Screen
        name={'My Cart order'}
        options={{
          header: ({ navigation, scene }) => (<Header title='PET HARMONY' headerColor={colors.RED} />)
        }}
        component={MyCartOrder}
      /> */}
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
        component={PractitionerScren}
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
      <TelevetScreenStack.Screen
        options={{
          header: ({ navigation, scene }) => (<Header title='PET HARMONY' headerColor={colors.RED} />)
        }}
        name="practitioner"
        component={PractitionerScren}
      />
    </TelevetScreenStack.Navigator>
  );
};
const ComunityScreenStacks = () => {
  return (
    <ComunityScreenStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: forSlide,
      }}>
      <ComunityScreenStack.Screen
        options={{
          header: ({ navigation, scene }) => (<Header title='PET HARMONY' headerColor={colors.RED} />),
        }}
        name="community"
        component={ComunityScreen}
      />
      <ComunityScreenStack.Screen
        options={{
          header: ({ navigation, scene }) => (<Header title='PET HARMONY' headerColor={colors.RED} />),
        }}
        name="Pet Visit Details"
        component={PetVisitDetailScreen}
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


const TimeLineScreenStacks = () => {
  return (
    <TimeLineScreenStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <TimeLineScreenStack.Screen
        name="Reminders"
        component={Reminders}
      />
    </TimeLineScreenStack.Navigator>
  );
}


const TabNav = props => {
  const { theme } = useSelector(state => state.theme);
  const { currentScreen,tabColor } = useSelector(state => state.screen);

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

  // const config = {
  //   animation: 'spring',
  //   config: {
  //     stiffness: 1000,
  //     damping: 500,
  //     mass: 3,
  //     overshootClamping: true,
  //     restDisplacementThreshold: 0.01,
  //     restSpeedThreshold: 0.01,
  //   },
  // };

  
  const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
    const progress = Animated.add(
      current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      next
        ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
        : 0
    );

    return {
      cardStyle: {
        transform: [
          {
            translateX: Animated.multiply(
              progress.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [
                  screen.width, // Focused, but offscreen in the beginning
                  0, // Fully focused
                  screen.width * -0.3, // Fully unfocused
                ],
                extrapolate: 'clamp',
              }),
              inverted
            ),
          },
        ],
      },
    };
  };


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
        tabBarVisible={false}
          tabBarOptions={{
            keyboardHidesTabBar: true,
            activeTintColor: theme.Theme.tab.ACTIVE_COLOR,
            inactiveTintColor: theme.Theme.tab.TAB_TEXT_COLOR,
            activeBackgroundColor: tabColor,
            inactiveBackgroundColor: tabColor,
            style: {
              borderTopWidth:0,
              backgroundColor: tabColor,
              elevation: 0,
              shadowOpacity: 0,
              paddingHorizontal: 45,
              height: Platform.OS === 'ios' ? Dimensions.get('window'). height * 0.1 : Dimensions.get('window'). height * 0.095
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
                } else if (currentScreen === "Televet Screen") {
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
            options={currentScreen == 'Subscription Option' || currentScreen === 'Select Subcription Option' || currentScreen == null ? {
              tabBarVisible: true,
            } : {
              tabBarVisible: true,
            }}
          />
          {/* <Tab.Screen
            name="Shopping"
            component={ShoppingScreenStacks}
          /> */}
          <Tab.Screen
            name="TeleMed"
            component={TelevetScreenStacks}
              />
          <Tab.Screen
            name="TimeLine"
            component={TimeLineScreenStacks}
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
      paddingTop: 10,
    },
    iconStyle: {
      height: 43,
      width: 43
    }
  });





export default TabNav;