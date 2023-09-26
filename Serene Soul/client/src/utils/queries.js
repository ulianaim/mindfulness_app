import { gql } from '@apollo/client';

export const QUERY_USER = gql `
query user($username: String!) {
    _id
    username
    email
    quotes {
        _id
        quoteText
        quoteAuthor
        createdAt
    }
}`

export const QUERY_QUOTES = gql`
query getQuotes {
    quotes {
        _id
        quoteText
        quoteAuthor
        createdAt
    }
}`

export const QUERY_SINGLE_QUOTE = gql`
query getSingleQuote($quoteId: ID!) {
    quote(quoteId: $thoughtId) {
        _id
        quoteText
        quoteAuthor
        createdAt
    }
}`

