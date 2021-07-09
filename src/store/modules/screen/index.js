import { actionType } from './actions.js';

const initialState = {
  currentScreen: null,
  tabColor: 'white'
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
