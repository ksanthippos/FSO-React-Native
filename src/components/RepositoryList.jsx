import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 80,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => {
  return(
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
  )
}

const RepositoryList = () => {
  const { repositories } = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

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
};

export default RepositoryList;
