import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch } from 'react-router-native';
import RepositoryList from './RepositoryList';
import SingleRepository from "./SingleRepository";
import SignIn from './SignIn'
import AppBar from './AppBar'
import SingleRepoContext from '../contexts/SingleRepoContext'


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#c8c6c6',
  },
});


const Main = () => {

  // useContext for toggling single repository view on/off
  const [ showSingle, setShowSingle ] = useState(false)

  const toggleSingle = () => {
    setShowSingle(!showSingle)
  }

  return (
    <View style={styles.container}>
      <SingleRepoContext.Provider value={{ showSingle, toggleSingle }}>
      <AppBar />
      <Switch>
        <Route path="/" exact component={RepositoryList} />
{/*         <Route path="/:id"> 
          <SingleRepository viewSingle={true} />
        </Route> */}
        <Route path="/signin" component={SignIn} />
      </Switch>
      </SingleRepoContext.Provider>
    </View>
  );
};

export default Main;