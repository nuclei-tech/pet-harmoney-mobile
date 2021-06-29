import {combineReducers} from 'redux';
import auth from './modules/auth/';
import theme from './modules/theme';
import screen from './modules/screen';

const reducers = combineReducers({
  auth: auth,
  theme: theme,
  screen:screen
});

export default reducers;
