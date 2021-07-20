import { actionType } from './actions.js';
import { colors } from '../../../themes/colors.js';

//user loging using email and password
export const currentRoute = (route) => {
  return async dispatch => {
    try {
      dispatch({ type: actionType.CURRENT_ROUTE, payload: route })
      dispatch(getColorCode(route))
    } catch (err) {
      console.warn('test');
    }
  };
};

export const getColorCode = (route) => {
  return async dispatch => {
    try {
      switch (route) {
        case 'HomeScreen':
          dispatch({ type: actionType.BOTTON_TAB_COLOR, payload: colors.DARK_BLUE })
          break;
        case 'My Cart':
          dispatch({ type: actionType.BOTTON_TAB_COLOR, payload: colors.WHITE_SMOKE })
          break;
        case 'My Cart order':
          dispatch({ type: actionType.BOTTON_TAB_COLOR, payload: colors.WHITE_SMOKE })
          break;
        case 'Shopping':
          dispatch({ type: actionType.BOTTON_TAB_COLOR, payload: colors.WHITE_SMOKE })
          break;
        default:
          dispatch({ type: actionType.BOTTON_TAB_COLOR, payload: colors.WHITE })
          break;
      }
    } catch (err) {
      console.warn('test');
    }
  };
};