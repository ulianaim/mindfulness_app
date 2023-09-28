import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query getUsers {
    users {
        _id
        username
        email
        password
    }
}`

export const QUERY_USER = gql `
query user($username: String!) {
    user(username: $username) {
    _id
    username
    email
    quotes {
        _id
        quoteText
        quoteAuthor
        createdAt
        }
    }
}`

export const QUERY_QUOTES = gql`
query Quotes {
    quotes {
      _id
      createdAt
      quoteAuthor
      quoteText
    }
  }
  `

export const QUERY_SINGLE_QUOTE = gql`
query getSingleQuote($quoteId: ID!) {
    quote(quoteId: $quoteId) {
        _id
        quoteText
        quoteAuthor
        createdAt
    }
}`

export const QUERY_MY_QUOTES = gql`
query getMyQuotes($username: String!) {
    myQuote(username: $username) {
        _id
        username
        email
        quotes {
            _id
            quoteText
            quoteAuthor
            createdAt
        }
    }
}`

