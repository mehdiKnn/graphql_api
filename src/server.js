const {ApolloServer} = require('apollo-server')
const {resolvers, typeDefs} = require('./schema')
const {context} = require('./context')

const server = new ApolloServer({typeDefs, resolvers, context: context})
server.listen().then(({url}) =>
    console.log(`
🚀 Server ready at: ${url}`),
)
