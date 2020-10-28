import React from 'react';
import { View } from 'react-native';
import Text from './Text'

const RepositoryItem = (props) => {
  return(
    <View>
      <Text fontWeight="bold" fontSize="subheading">{props.name}</Text>
      <Text color="primary">{props.description}</Text>
      <Text>Language: {props.language}</Text>
      <Text>Stars: {props.stars}</Text>
      <Text>Forks: {props.forks}</Text>
      <Text>Reviews: {props.reviews}</Text>
      <Text>Rating: {props.rating}</Text>


    </View>
  );
};


export default RepositoryItem;