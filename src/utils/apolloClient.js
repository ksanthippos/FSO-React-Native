import ApolloClient from 'apollo-boost'

const createApolloClient = () => {
  return new ApolloClient({
    uri: 'http://192.168.1.89:5000/graphql',
  })
}

export default createApolloClient