const gql = require('graphql-tag')
const { makeExecutableSchema } = require('@graphql-tools/schema')

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
]

const users = [
  {
    first_name: 'Connor',
    last_name: 'Anderson',
    username: 'connorbanderson',
    birthday: '19901104',
    address: '6 Tuscany Valley Road NW',
  },
  {
    first_name: 'SuJi',
    last_name: 'Lee',
    username: 'sjlee91',
    birthday: '19910305',
    address: '6 Tuscany Valley Road NW',
  },
]

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.
  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: String
  }

  type User {
    first_name: String
    last_name: String
    username: String
    birthday: String
    address: String
  }

  type Query {
    books: [Book]
    users: [User]
  }
`

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
    users: () => users,
  },
}

module.exports = {
  schema: makeExecutableSchema({
    typeDefs,
    resolvers,
  }),
  // Bonus function, to remove stack trace on production
  // https://www.apollographql.com/docs/apollo-server/features/errors
  formatError: (error) => {
    if (process.env.NODE_ENV === 'production') {
      delete error.extensions.exception
    }
    return error
  },
}
