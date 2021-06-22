import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import TabNav from './navigation/navigation';

const MainApp = () => {
  useEffect(() => {
    checktoken();
  }, []);
  // const dispatch = useDispatch();

  const checktoken = async () => {
    //check token when user loging

    // const userToken = await AsyncStorage.getItem('token');
    // if (userToken) {
    //   dispatch(userLoginWithtoken());
    // }
  };

  return <TabNav />;
};

export default MainApp;
