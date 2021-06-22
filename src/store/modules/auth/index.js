import {actionType} from './actions.js';

const initialState = {
  authLoading: false,
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH_LOADING:
      return {...state, userLoading: action.payload};
    case actionType.SET_USER:
      return {...state, user: action.payload};
    default:
      return state;
  }
};

export * from './auth';
export default reducer;
