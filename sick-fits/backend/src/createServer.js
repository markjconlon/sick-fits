//GraphQL Yoga is an express middleware
const { GraphQLServer } = require('graphql-yoga');

// resolvers
// Query resolvers to pull data
const Mutation = require('./resolvers/Mutation');
// Mutation resolconst vers to change data
const Query = require('./resolvers/Query');
const db = require('./db');

// Create GraphQL Yoga Server
function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation: Mutation,
      Query: Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({...req, db}),
  });
}

module.exports = createServer;