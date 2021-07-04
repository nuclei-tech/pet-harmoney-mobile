// import axios from 'axios'
import {showMessage} from 'react-native-flash-message';
import {actionType} from './actions.js';
import { useQuery } from '@apollo/client';

import { LOAD_OWNERS } from './queries';


//user loging using email and password
export const loginUser = loginDetails => {
  return async dispatch => {
    const { error_load_owners, loading, data } = useQuery(LOAD_OWNERS);
    console.warn('eeee=>>>',data);

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
