const { ApolloServer } = require('apollo-server')
const config = require('./config')

const server = new ApolloServer(config)

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
