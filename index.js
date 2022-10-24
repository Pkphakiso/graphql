const {ApolloServer} = require("apollo-server")
const {typeDefs } = require("./schema/type-def")
const {resolvers} = require("./schema/resolvers")


const server= new ApolloServer({typeDefs,resolvers}) // TAKES two things only
server.listen().then( ({url})=> {
    console.log(`API IS RUNNING AT: ${url} :)`);
});

