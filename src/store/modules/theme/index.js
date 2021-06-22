import lightTheme from '../../../themes/lightTheme';
import darkTheme from '../../../themes/darkTheme';
import {THEME} from '../../../../config';

const initialState = {
  theme: lightTheme, //default theme
};

const themeReducer = (state = initialState, action) => {
  let newState;
  if (THEME == 'Dark') {
    newState = {
      ...state,
      theme: {...darkTheme},
    };
    return newState;
  } else if (THEME == 'Light') {
    newState = {
      ...state,
      theme: {...lightTheme},
    };
    return newState;
  } else {
    return state;
  }
};

export default themeReducer;
