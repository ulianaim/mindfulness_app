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

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user{
        _id
        username
        }
      }
    }`

export const ADD_QUOTE = gql`
  mutation addQuote($body: String!) {
    addQuote(body: $body) {
        _id
        username
        email
        password
  }`

export const UPDATE_QUOTE = gql`
mutation updateQuote($quoteId: String!, $body: String!)
    updateQuote(quoteId: $quoteId, body: $body) {
        _id
        username
        email
        password
        addedQuotes {
            quoteText
            quoteAuthor
            createdAt
        }
    }`
  

export const DELETE_QUOTE = gql`
  mutation deleteQuote($quoteId: String!) {
    deleteQuote(quoteId: $quoteId)
    _id
    username
    email
    password
  }`