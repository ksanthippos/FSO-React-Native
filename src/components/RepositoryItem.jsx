import React from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';
import Text from './Text'

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
    borderRadius: 3,
  },
  badge: {
    backgroundColor: "#3374b4",
    color: '#ffffff',
    borderRadius: 3,
    width: 100,
    padding: 1,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexItemMain: {
    flexGrow: 1,
    backgroundColor: '#c7bdbd',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  flexItemSub: {
    flexGrow: 2,
    backgroundColor: '#fff3f3',
    padding: 1,
  }
})

const RepositoryItem = (props) => {
  return(
    <View style={styles.flexItemMain}>
      <Image
        style={styles.logo}
        source={{ uri: props.avatar }}
      />
      <Text fontWeight="bold" fontSize="subheading">{props.name}</Text>
      <Text color="primary">{props.description}</Text>
      <TouchableWithoutFeedback>
        <Text style={styles.badge}>
          {props.language}
        </Text>
      </TouchableWithoutFeedback>
      <View style={styles.flexContainer}>
        <View style={styles.flexItemSub}>
          <Text>Stars: {props.stars}</Text>
        </View>
        <View style={styles.flexItemSub}>
          <Text>Forks: {props.forks}</Text>
        </View>
        <View style={styles.flexItemSub}>
          <Text>Reviews: {props.reviews}</Text>
        </View>
        <View style={styles.flexItemSub}>
          <Text>Rating: {props.rating}</Text>
        </View>
      </View>
    </View>
  );
};


export default RepositoryItem;