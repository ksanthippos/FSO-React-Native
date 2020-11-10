import { useMutation } from '@apollo/react-hooks';
import { SIGN_IN } from '../graphql/mutations';
import AuthStorage from '../utils/authStorage'


const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const authStorage = new AuthStorage('authStorage')


  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username: username, password: password }})
    await authStorage.setAccessToken(data.authorize.accessToken)

/*     const token = await authStorage.getAccessToken()
    console.log('NEW TOKEN ', token); */
    return data
  };
  
  return [signIn, result];
}


export default useSignIn