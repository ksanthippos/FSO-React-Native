import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch } from 'react-router-native';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn'
import AppBar from './AppBar'


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#c8c6c6',
  },
});


const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact component={RepositoryList} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </View>
  );
};

export default Main;