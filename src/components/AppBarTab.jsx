import React from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'

const styles = StyleSheet.create({
  tab: {
    color: "#ffffff",
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 10,
    flexGrow: 1
  }
})

const AppBarTab = (props) => {

  return(
    <TouchableWithoutFeedback>
      <Text style={styles.tab}>{props.text}</Text>
    </TouchableWithoutFeedback>
  )
}

export default AppBarTab