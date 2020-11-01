import React from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'

const styles = StyleSheet.create({
  tab: {
    padding: 30,
  },
  text: {
    color: "#ffffff",
  }
})

const AppBarTab = (props) => {

  return(
    <View style={styles.tab}>
      <TouchableWithoutFeedback>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default AppBarTab