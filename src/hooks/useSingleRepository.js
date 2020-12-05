import { useQuery } from '@apollo/react-hooks';
import { SINGLE_REPOSITORY } from '../graphql/queries';

const useSingleRepository = (variables) => {
  const { data, error, loading } = useQuery(SINGLE_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables
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
    console.log('repo ready!');
    console.log(data);
    return data
  }

};

export default useSingleRepository;