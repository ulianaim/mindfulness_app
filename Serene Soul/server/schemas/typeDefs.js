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
        }
          
    type Auth {
        token: ID
        user: User
        }

    type Query {
        quotes: [Quote]!
        quote(quoteId: ID!): Quote   
        user(userId: ID!): User
        }

  type Mutation {    
        login(email: String!, password: String!): Auth
        addQuote(body: String!): Quote
        removeQuote(quoteId: String!): Quote
        updateQuote(quoteId: String!, body: String!): Quote
        addUser(username: String!, email: String!, password: String!): User
        removeUser(userId: String!): User
        }`;

module.exports = typeDefs;
