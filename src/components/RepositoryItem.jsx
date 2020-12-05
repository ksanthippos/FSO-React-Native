import React, { useContext } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking'
import SingleRepoContext from '../contexts//SingleRepoContext'
import Text from './Text'

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    backgroundColor: '#f1eeea',
  },
  containerA: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  containerB: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
    width: 0,
    flex: 1,  
    marginLeft: 10,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 3,
  },
  infoItem: {
    flexGrow: 2,
    padding: 2,
    flexShrink: 1,
  },
  valueItem: {
    flexGrow: 2,
    padding: 2,
    flexShrink: 1,
    alignItems: 'center'
  },
  badgeItem: {
    alignSelf: 'flex-start',
    backgroundColor: "#3374b4",
    borderRadius: 3,
    padding: 3,
  },
  button: {
    backgroundColor: '#4b9ed4',
    borderRadius: 3,
    padding: 10,
    margin: 10,
    textAlign: 'center',
    color: '#ffffff'
  },
})

const LinkButton = ({ handlePress }) => {
  return(
    <TouchableOpacity onPress={handlePress}>
        <Text style={styles.button}>Open in GitHub</Text>
    </TouchableOpacity>
  )
}

const RepositoryItem = (props) => {

  // 23450 --> 23.5k
  const kFormatter = (num) => {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
  } 

  const singleView = useContext(SingleRepoContext)

  const handlePress = () => {
    Linking.openURL(props.url)
  }

  return(
    <View style={styles.main}>

      <View style={styles.containerA}>
        <View>
          <Image style={styles.logo} source={{ uri: props.avatar }} />
        </View>
        <View style={styles.containerB}>
          <View style={styles.infoItem}>
            <Text testID="name" fontWeight="bold" fontSize="subheading">{props.name}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text testID="description" color="primary">{props.description}</Text>
          </View>
          <View style={styles.badgeItem}>
            <Text testID="language" color="white">{props.language}</Text>
          </View>
        </View>
      </View>

      <View style={styles.containerA}>
        <View style={styles.valueItem}>
          <Text testID="stars" fontWeight='bold'>{kFormatter(props.stars)}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.valueItem}>
          <Text testID="forks" fontWeight='bold'>{kFormatter(props.forks)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.valueItem}>
          <Text testID="reviews" fontWeight='bold'>{props.reviews}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.valueItem}>
          <Text testID="rating" fontWeight='bold'>{props.rating}</Text>
          <Text>Rating</Text>
        </View>
      </View>
      {singleView.showSingle
        ? <LinkButton handlePress={handlePress} />
        : null 
        }
    </View>
  );
};




export default RepositoryItem;