import React from 'react';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar'
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

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
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;