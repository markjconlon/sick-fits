//this file connects to the remote prisma DB and allos us to query it with JS
const { Prisma } = require('prisma-binding');

const db = new Prisma ({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secre: process.env.PRISMA_SECRET,
  debug: false
});

module.exports = db;