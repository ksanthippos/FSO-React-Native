import React, { useContext } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import { useApolloClient } from '@apollo/react-hooks'
import AuthStorageContext from '../contexts/AuthStorageContext'
import AppBarTab from './AppBarTab'
import useAuthUser from '../hooks/useAuthUser'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: "flex",
    backgroundColor: "#24292e",
    flexDirection: "row",
  },
});


const AppBar = () => {
  const authUser = useAuthUser()
  const history = useHistory()
  const apolloClient = useApolloClient()
  const authStorage = useContext(AuthStorageContext)

  const signOut = async () =>  {
    await authStorage.removeAccessToken()
    apolloClient.resetStore()
    history.push('/signin')
  }

  return (
    <View style={styles.container}>
    { authUser.authorizedUser === null
    ?
    <ScrollView horizontal>
      <Link to="/signin">
        <AppBarTab text={`Sign in`} />
      </Link>
    </ScrollView>
    :
    <ScrollView horizontal>
      <Link to="/">
        <AppBarTab text={`Repositories`} />
      </Link>
      <TouchableOpacity onPress={signOut}>
        <AppBarTab text={'Sign out'} />
      </TouchableOpacity>
    </ScrollView>
    }
    </View>
  );
};

export default AppBar;