import { useQuery } from '@apollo/react-hooks';
import { SINGLE_REPOSITORY } from '../graphql/queries';

const useSingleRepository = () => {
  const { data, error, loading } = useQuery(SINGLE_REPOSITORY, {
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

export default useSingleRepository;