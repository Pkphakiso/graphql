const {gql} = require("apollo-server")

const typeDefs = gql`

    type User {
        id:ID!
        name:String!
        username:String!
        age:Int!
        nationality: Nationality!
        friends: [User]
        favorateMovies:[Movie]
    }
    
    type Movie {
        id:ID!
        name: String!
        yearOfPublication:Int!
        isInTheaters: Boolean!
    }
     
    type Query {
        users:[User!]!
        user(id:ID!): User!
        movies:[Movie!]!
        movie(name: String!): Movie!
    
    }
    input CreateUserinput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = INDIA
        
    }
    input UpdateUsernameinput {
        id: ID!
        newUsername:String! 
        
    }
    type Mutation {
        createUser(input: CreateUserinput! ): User
        updateUsername(input: UpdateUsernameinput!): User
    }
    
    enum Nationality {
        GERMENY
        BRAZIL
        CHILE 
        CAMERON 
        INDIA
    }


`;

module.exports = {typeDefs}