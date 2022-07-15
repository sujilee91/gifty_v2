import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:5001/gifty-v2-1/us-central1/handler',
})

export default client
