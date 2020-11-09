import { gql } from 'apollo-boost'

/* 
1. input (with $)
2. mutation name (auth)
3. set username&password inside credentials
4. retrieve token
*/

export const SIGN_IN = gql`
mutation ($username: String!, $password:String!) {  
  authorize(credentials: {
    username: $username,
    password: $password
  }) {
    accessToken
  }
}
`

