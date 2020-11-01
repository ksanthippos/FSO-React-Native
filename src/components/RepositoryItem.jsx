import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
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
    borderRadius: 5,
    width: 100,
    padding: 1,
    textAlign: 'center',
  },
  flexContainerA: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  flexContainerB: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
    width: 0,
    flex: 1,  
    padding: 5
  },
  flexItemMain: {
    flexGrow: 1,
    backgroundColor: '#f1eeea',
  },
  flexItemSubA: {
    flexGrow: 2,
    padding: 2,
    flexShrink: 1,
  },
  flexItemSubB: {
    flexGrow: 2,
    padding: 2,
    flexShrink: 1,
    alignItems: 'center'
  },
})


const RepositoryItem = (props) => {

  // 23450 --> 23.5k
  const kFormatter = (num) => {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
  } 

  return(
    <View style={styles.flexItemMain}>

      <View style={styles.flexContainerA}>
        <View>
          <Image style={styles.logo} source={{ uri: props.avatar }} />
        </View>
        <View style={styles.flexContainerB}>
          <View style={styles.flexItemSubA}>
            <Text fontWeight="bold" fontSize="subheading">{props.name}</Text>
          </View>
          <View style={styles.flexItemSubA}>
            <Text color="primary">{props.description}</Text>
          </View>
          <View style={styles.flexItemSubA}>
            <Text style={styles.badge}>{props.language}</Text>
          </View>
        </View>
      </View>

      <View style={styles.flexContainerA}>
        <View style={styles.flexItemSubB}>
          <Text fontWeight='bold'>{kFormatter(props.stars)}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.flexItemSubB}>
          <Text fontWeight='bold'>{kFormatter(props.forks)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.flexItemSubB}>
          <Text fontWeight='bold'>{props.reviews}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.flexItemSubB}>
          <Text fontWeight='bold'>{props.rating}</Text>
          <Text>Rating</Text>
        </View>
      </View>

    </View>
  );
};


export default RepositoryItem;