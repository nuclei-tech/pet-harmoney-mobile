import React,{useEffect} from 'react';
import axios from 'axios';

import {API_URL} from '../config';
import {StatusBar, Alert} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import {ApolloProvider} from '@apollo/client';
import messaging from '@react-native-firebase/messaging';

import { bindActionCreators } from 'redux';
import configureStore from './store';
import { Provider, connect } from 'react-redux';
import MainApp from './index';

import {client} from './apolloClient'

// create our store
const store = configureStore();

// axios.defaults.baseURL = API_URL;

// axios.defaults.timeout = 30000;
// axios.interceptors.request.use(request => {
//   request.ts = performance.now(); // to find the performance
//   if (
//     request.data &&
//     request.headers['Content-Type'] === 'application/x-www-form-urlencoded'
//   ) {
//     request.data = qs.stringify(request.data);
//   }
//   return request;
// });

// axios.interceptors.response.use(
//   response => {
//     return response;
//   },
//   async error => {
//     const { response } = error;

//     return Promise.reject(response);
//   },
// );

const getFcmToken = async () => {
  const fcmToken = await messaging().getToken();
  if (fcmToken) {
   console.log(fcmToken);
   console.log("Your Firebase Token is:", fcmToken);
  } else {
   console.log("Failed", "No token received");
  }
}

const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    getFcmToken()
    console.log('Authorization status:', authStatus);
  }
}

const IndexApp = props => {
  return props.children;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

const mapStateToProps = state => {
  return state;
};

let AppWrapper = connect(mapStateToProps, mapDispatchToProps)(IndexApp);

const App = () => {
  useEffect(()=>{
    SplashScreen.hide();
    requestUserPermission();
    // const unsubscribe = messaging().onMessage(async remoteMessage => {
    //   Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    // });
    // return unsubscribe;
  },[])
  return (
    <ApolloProvider client={client} >
      <Provider  store={store}>
        <StatusBar barStyle={'light-content'} />
        <AppWrapper>
          <MainApp />
        </AppWrapper>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
