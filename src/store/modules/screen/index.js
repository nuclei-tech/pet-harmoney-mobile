import { actionType } from './actions.js';
import {colors} from '../../../themes/colors'

const initialState = {
  currentScreen: null,
  tabColor: colors.DARK_BLUE
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CURRENT_ROUTE:
      return {
        ...state,
        currentScreen: action.payload,
      };
    case actionType.BOTTON_TAB_COLOR:
      return {
        ...state,
        tabColor: action.payload,
      };
    default:
      return state;
  }
};

export * from './screen';
export default reducer;
