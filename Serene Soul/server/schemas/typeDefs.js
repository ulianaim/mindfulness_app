const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Affirmation {
    _id: ID
    affirmationText: String
    affirmationAuthor: String
    createdAt: String
    }
    type Quote {
        _id: ID
        quoteText: String
        quoteAuthor: String
        createdAt: String
        }

    type User {
            _id: ID
            userText: String
            userAuthor: String
            createdAt: String
            }

    type Query {
    affirmations: [Affirmation]!
    affirmation(affirmationId: ID!): Affirmation
    quotes: [Quote]!
    quote(quoteId: ID!): Quote   
    user(userId: ID!): User
  }

  type Mutation {
    addAffirmation(affirmationText: String!, affirmationAuthor: String!): Affirmation
    addQuote(quoteId: ID!, quoteText: String!): Quote
    removeAffirmation(affirmationId: ID!): Affirmation
    removeQuote(quoteId: ID!): Quote
    addUser(firstName: String!, lastName: String!, email: String!, userName: String, password: String!): User
    removeQuote(quoteId: ID!): Quote
  }
`;

module.exports = typeDefs;
