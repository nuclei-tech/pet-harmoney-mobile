import { LOAD_OWNERS } from './queries';
import { ADD_PET } from './mutations';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphqlErrors, networkErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`)
    })
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:4000/graphql' }),
]);

const client = new ApolloClient({
  link:link,
  cache: new InMemoryCache()
});


//user loging using email and password
export const loginUser = loginDetails => {
  return async dispatch => {
  client.query({
    query: LOAD_OWNERS,
  }).then((res) => {
   const {loading,data} = res
    if (data) {
      console.warn('eee=>>>>>>',data);
      // dispatch({ type: 'FETCH_ADS_FULFILLED', payload: resp.data.allAds });
    }
  });
  }
};


export const addUser = loginDetails => {
  return async dispatch => {
  client.mutate({
    mutation: ADD_PET,
    variables: {
      name: "name",
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


