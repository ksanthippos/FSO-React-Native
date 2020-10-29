import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexGrow: 1,
    opacity: 0.8,
    backgroundColor: "#24292e",
  },
  text: {
    color: "#ebdb4d",
    margin: 10,
  }
});

const AppBar = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.text}>Repositories</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBar;