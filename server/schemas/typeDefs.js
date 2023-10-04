const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Quote {
        _id: ID
        quoteText: String
        quoteAuthor: String
        createdAt: String
        }

    type User {
        _id: ID
        username: String
        email: String
        password: String 
        quotes: [Quote]
        }
          
    type Auth {
        token: ID
        user: User
        }

    type Query {
        users: [User]!
        quotes: [Quote]!
        quote(quoteId: ID!): Quote   
        user(username: String!): User
        myQuote(username: String!): [Quote]
        }
    

  type Mutation {    
        login(email: String!, password: String!): Auth
        addQuote(username: String!, quoteText: String!, quoteAuthor: String!): Quote
        removeQuote(quoteId: String!): Quote
        updateQuote(quoteId: String!, quoteText: String!, quoteAuthor: String): Quote
        addUser(username: String!, email: String!, password: String!): Auth
        removeUser(userId: ID!): User
        }`;

module.exports = typeDefs;
