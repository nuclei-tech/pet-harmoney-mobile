import {actionType} from './actions.js';

//user loging using email and password
export const currentRoute = (route) => {
  return async dispatch => {
    try {
      dispatch({ type: actionType.CURRENT_ROUTE, payload: route })
    } catch (err) {
      console.warn('test');
    }
  };
};
