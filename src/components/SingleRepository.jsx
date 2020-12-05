import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { useParams } from 'react-router-dom'
// import useSingleRepository from '../hooks/useSingleRepository'
import SingleRepoContext from '../contexts/SingleRepoContext'


const SingleRepository = (props) =>  {
  const id = useParams.id
  // const { repository } = useSingleRepository({ id })

  const showRepo = useContext(SingleRepoContext)


  const handlePress = () => {
    showRepo.toggleSingle()
  }

  return(
    <View>
      <Text>Halloo!</Text>
      <Button onPress={handlePress} title="back" />
    </View>
  )

}

export default SingleRepository