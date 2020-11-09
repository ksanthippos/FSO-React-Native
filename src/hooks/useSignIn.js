import { useMutation } from '@apollo/react-hooks';
import { SIGN_IN } from '../graphql/mutations';


const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    mutate({ variables: { username: username, password: password }})
  };
  
  console.log('SIGN IN HOOK: ', result);
  return [signIn, result];
}


export default useSignIn