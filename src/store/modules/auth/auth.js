import { LOAD_OWNERS } from './queries';
import { ADD_PET } from './mutations';

import {client} from '../../../apolloClient' // this only when api not using apollo hooks

import { useQuery,useMutation } from '@apollo/client';


//user loging using email and password
export const loginUser = () => {
  return async dispatch => {
  client.query({
    query: LOAD_OWNERS,
  }).then((res) => {
   const {loading,data} = res
    if (data) {
      console.warn('eee=>>>>>>',data);
      // dispatch({ type: 'FETCH_ADS_FULFILLED', payload: resp.data.allAds });
    }
  })
  }

};

export const addUser = (data) => {
  return async dispatch => {
  client.mutate({
    mutation: ADD_PET,
    variables: {
      name: "ffffff",
      type: "type",
      age: 0,
      ownerId: "ownerId"
  }
  }).then((res) => {
    const {loading,data} = res
    if (res.data) {
      dispatch(loginUser())
      console.warn('eee=>>>>>>',data);
      // dispatch({ type: 'FETCH_ADS_FULFILLED', payload: resp.data.allAds });
    }
  });
  }
};


