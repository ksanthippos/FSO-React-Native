import { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks';
import { useApolloClient } from '@apollo/react-hooks'
import { GET_USER } from '../graphql/queries';
import AuthStorageContext from '../contexts/AuthStorageContext'

const useAuthUser = () => {
  const { data, error, loading } = useQuery(GET_USER, {
    fetchPolicy: 'cache-and-network',
  })

  if (!data || data === undefined) {
    console.log('user undefined');
    return []
  }

  if (error) {
    console.log('user error', error);
    return []
  }

  if (loading) {
    console.log('loading user..');
    return []
  }

  else {
    console.log('user authenticated');
    return data
  }

}

export default useAuthUser