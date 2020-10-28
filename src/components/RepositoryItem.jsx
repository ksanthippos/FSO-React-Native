import React from 'react';
import { View, Text } from 'react-native';

const RepositoryItem = (props) => {
  return(
    <View>
      <Text>Full name: {props.name}</Text>
      <Text>Description: {props.description}</Text>
      <Text>Language: {props.language}</Text>
      <Text>Stars: {props.stars}</Text>
      <Text>Forks: {props.forks}</Text>
      <Text>Reviews: {props.reviews}</Text>
      <Text>Rating: {props.rating}</Text>


    </View>
  );
};


export default RepositoryItem;