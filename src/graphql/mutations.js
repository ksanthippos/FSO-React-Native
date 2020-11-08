import { gql } from 'apollo-boost'

export const SIGN_IN = gql`
mutation authorize($credentials: AuthorizeInput) {
  credentials($username: String!, $password: String!) {
    username: $username
    password: $password
  }
}
`