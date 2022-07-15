const functions = require('firebase-functions')
const express = require('express')
const config = require('./config')
// Construct a schema, using GraphQL schema language
const typeDefs = require('./schema/schema.js')

// Provide resolver functions for your schema fields
const resolvers = require('./resolvers')

// Create GraphQL express server
const { ApolloServer } = require('apollo-server-express')

// Setup express cloud function
const app = express()

//Create graphql server
const server = new ApolloServer(config)
server.applyMiddleware({ app, path: '/', cors: true })

exports.graphql = functions.https.onRequest(app)
