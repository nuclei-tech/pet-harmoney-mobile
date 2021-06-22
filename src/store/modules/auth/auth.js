// import axios from 'axios'
import {showMessage} from 'react-native-flash-message';
import {actionType} from './actions.js';

//user loging using email and password
export const loginUser = loginDetails => {
  return async dispatch => {
    try {
      dispatch({type: actionType.AUTH_LOADING, payload: true});
      dispatch({type: actionType.SET_USER, payload: user.user});
      showMessage({
        message: `You have successfully logged out`,
        type: 'success',
      });
    } catch (err) {
      dispatch({type: actionType.AUTH_LOADING, payload: false});
    }
  };
};
