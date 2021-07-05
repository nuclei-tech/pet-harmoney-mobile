import React,{useEffect} from 'react';
import axios from 'axios';
import {API_URL} from '../config';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen'


import {bindActionCreators} from 'redux';
import configureStore from './store';
import {Provider, connect} from 'react-redux';
import MainApp from './index';

// create our store
const store = configureStore();

axios.defaults.baseURL = API_URL;

axios.defaults.timeout = 30000;
axios.interceptors.request.use(request => {
  request.ts = performance.now(); // to find the performance
  if (
    request.data &&
    request.headers['Content-Type'] === 'application/x-www-form-urlencoded'
  ) {
    request.data = qs.stringify(request.data);
  }
  return request;
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const {response} = error;

    return Promise.reject(response);
  },
);

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
  },[])
  return (
    <Provider store={store}>
      <StatusBar barStyle={'dark-content'} />
      <AppWrapper>
        <MainApp />
      </AppWrapper>
    </Provider>
  );
};

export default App;
