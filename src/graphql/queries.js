import { gql } from 'apollo-boost'

export const GET_REPOSITORIES = gql`
  query {
    repositories(orderDirection: ASC) {
      edges {
        node {
          id
          ownerAvatarUrl
          ownerName
          name
          description
          language
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`

