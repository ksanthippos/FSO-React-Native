import { useContext } from 'react'
import { useMutation } from '@apollo/react-hooks';
import { SIGN_IN } from '../graphql/mutations';
import AuthStorageContext from '../contexts/AuthStorageContext'


const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const authStorage = useContext(AuthStorageContext)

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username: username, password: password }})
    await authStorage.setAccessToken(data.authorize.accessToken)

    return data
  };
  
  return [signIn, result];
}


export default useSignIn