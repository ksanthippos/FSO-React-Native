import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { orderDirection: 'ASC' }
  })

  if (!data || data === undefined) {
    return []
  }

  if (error) {
    console.log(error);
    return []
  }

  if (loading) {
    console.log('loading..');
    return []
  }

  else {
    console.log('data ready!');
    return data
  }

};

export default useRepositories;