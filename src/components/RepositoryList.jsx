import React, { useContext } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import RepositoryItem from './RepositoryItem';
import SingleRepository from './SingleRepository'
import useRepositories from '../hooks/useRepositories';
import SingleRepoContext from '../contexts/SingleRepoContext'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
  }
});



const ItemSeparator = () => <View style={styles.separator} />;


export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];  

  const showRepo = useContext(SingleRepoContext)

  const handlePress = () => {
    showRepo.toggleSingle()
  }

  const renderItem = ({ item }) => {
    return(
      <TouchableOpacity onPress={handlePress}>
        <RepositoryItem 
          name={item.fullName}
          description={item.description} 
          language={item.language}
          stars={item.stargazersCount}
          forks={item.forksCount}
          reviews={item.reviewCount}
          rating={item.ratingAverage}
          avatar={item.ownerAvatarUrl}
        />
      </TouchableOpacity>
    )
  }

  if (showRepo.showSingle) {
    return <SingleRepository />
  }
  else {
    return (
      <View style={styles.flexContainer}>
        <FlatList
          data={repositoryNodes}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }

}

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />
};

export default RepositoryList;
