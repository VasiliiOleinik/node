const {ApolloServer} = require('@apollo/server')
const {startStandaloneServer} = require('@apollo/server/standalone')
const connectToDB = require('./db/db')
const typeDefs = require('./graphql/schema')
const resolvers = require('./graphql/resolvers')


async function startApolloServer() {
    await connectToDB()
    const server = new ApolloServer({typeDefs, resolvers})
    
    const {url} = await startStandaloneServer(server, {
        listen: {
            port: 4000
        }
    })

    console.log(`Server ready at ${url}`)
}

startApolloServer()