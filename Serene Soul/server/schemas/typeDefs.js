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
    addQuote(quoteId: ID!, quoteText: String!): Quote
    removeQuote(quoteId: ID!): Quote
    updateQuote(quoteId: ID!, quoteText: String!): Quote
    addUser(username: String, email: String!, password: String!): User
    removeUser(userId: ID!): User
  }
`;

module.exports = typeDefs;
