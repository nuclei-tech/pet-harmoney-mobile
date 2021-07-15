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
    new HttpLink({ uri: 'http://localhost:4000/graphql' }),//backend url
  ]);
  
  const client = new ApolloClient({
    link:link,
    cache: new InMemoryCache()
  });


  export {
    link,
    errorLink,
    client
  }