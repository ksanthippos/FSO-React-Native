import React from 'react';
import { View } from 'react-native';
import { useParams } from 'react-router-dom'
import useSingleRepository from '../hooks/useSingleRepository'
import RepositoryItem from '../components/RepositoryItem'

const SingleRepository = () =>  {
  const id = useParams().id
  const { repository } = useSingleRepository({ id })

  if (repository) {
    return(
      <View>
        <RepositoryItem 
          name={repository.fullName}
          description={repository.description} 
          language={repository.language}
          stars={repository.stargazersCount}
          forks={repository.forksCount}
          reviews={repository.reviewCount}
          rating={repository.ratingAverage}
          avatar={repository.ownerAvatarUrl}
          url={repository.url}
        />
      </View>
    )
  }
  else 
    return null
  
}

export default SingleRepository