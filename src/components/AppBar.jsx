import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: "flex",
    backgroundColor: "#24292e",
    flexDirection: "row",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link to="/">
        <AppBarTab text={`Repositories`} />
      </Link>
      <Link to="/sign">
        <AppBarTab text={`Sign in`} />
      </Link>
    </View>
  );
};

export default AppBar;