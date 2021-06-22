import {combineReducers} from 'redux';
import auth from './modules/auth/';
import theme from './modules/theme';

const reducers = combineReducers({
  auth: auth,
  theme: theme,
});

export default reducers;
