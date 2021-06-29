import {actionType} from './actions.js';

const initialState = {
  currentScreen: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CURRENT_ROUTE:
      return {
        ...state,
        currentScreen: action.payload
      };
    default:
      return state;
  }
};

export * from './screen';
export default reducer;
