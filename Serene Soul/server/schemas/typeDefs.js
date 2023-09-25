const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
    me: User
}

type User {
    _id: ID
    username: String
    email: String
    password: String
    addedQuotes: [Quote]
}

type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    addQuote(body: addQuoteInput!): Quote
    updateQuote(body: updateQuoteInput!): Quote
    deleteQuote(quoteId: String!): Quote
}

input addQuoteInput {
    _id: ID
    message: String
    author: String
}

input updateQuoteInput {
    _id: ID
    message: String
    author: String
}

type Quote {
    _id: ID
    message: String
    author: String
}

type Auth {
    token: ID!
    user: User
}
`;

module.exports = typeDefs;