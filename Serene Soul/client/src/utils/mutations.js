import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}`

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        }
      }
    }`

export const ADD_QUOTE = gql`
  mutation addQuote($quoteText: String!, $quoteAuthor: String!) {
    addQuote(quoteText: $quoteText, quoteAuthor: $quoteAuthor) {
        _id
        username
        email
        password
    }
      }`

export const UPDATE_QUOTE = gql`
mutation updateQuote($quoteId: String!, $quoteText: String!, $quoteAuthor: String!){
    updateQuote(quoteId: $quoteId, quoteText: $quoteText, quoteAuthor: $quoteAuthor) {
        _id
        username
        email
        password
        addedQuotes {
            quoteText
            quoteAuthor
            createdAt
        }
    }
  }`
  

export const REMOVE_QUOTE = gql`
  mutation removeQuote($quoteId: String!) {
    removeQuote(quoteId: $quoteId) {
    _id
    username
    email
    password
  }
}`