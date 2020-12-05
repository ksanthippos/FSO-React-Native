import React from 'react';
import { Text, View } from 'react-native';
import { useParams } from 'react-router-dom'
import useSingleRepository from '../hooks/useSingleRepository'


const SingleRepository = () =>  {
  const id = useParams().id
  const { repository } = useSingleRepository({ id })

  if (repository) {
    return(
      <View>
        <Text>{repository.name}</Text>
      </View>
    )
  }
  else 
    return null
  
}

export default SingleRepository