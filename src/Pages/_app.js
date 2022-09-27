import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import { Horizontal } from '../Components/Menu'
//import { Menu } from '../Components/Menu'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Horizontal />
      {/* <Menu /> */}
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
