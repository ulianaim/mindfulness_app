import { gql } from '@apollo/client';

export const GET_ME = gql `
{
    me {
        email
        username
        password
        quotes {
            message
            author
            date
        }
    }
}`

export const GET_QUOTES = gql`
{
    quotes {
        message
        author
    }
}`