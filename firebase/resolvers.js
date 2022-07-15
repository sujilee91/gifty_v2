// Connect to firebase database, which we created in step 3
const admin = require('./admin')

// Here Firebase returns an object and GraphQL is expecting an array, so we need to extract the values.

const resolvers = {
  Query: {
    books: () =>
      admin
        .database()
        .ref('books')
        .once('value')
        .then((snap) => snap.val())
        .then((val) => Object.keys(val).map((key) => val[key])),
    users: () =>
      admin
        .database()
        .ref('users')
        .once('value')
        .then((snap) => snap.val())
        .then((val) => Object.keys(val).map((key) => val[key])),
  },
}

module.exports = resolvers
