import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Colors from '../../themes/colors';

const EpisodeCardDetail = ({route}) => {
  const {item} = route?.params;
  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: '2-digit',
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={styles.name}>Name: </Text>
        <Text style={styles.name}>{item?.name}</Text>
      </View>
      <View style={styles.viewContainer}>
        <Text style={styles.name}>Episode:</Text>
        <Text style={styles.textItem}>{item?.url}</Text>
      </View>
      <View style={styles.viewContainer}>
        <Text style={styles.name}>Serial Number : </Text>
        <Text style={styles.textItem}>{item?.episode}</Text>
      </View>
      <View style={styles.viewContainer}>
        <Text style={styles.name}>Date: </Text>
        <Text style={styles.textItem}>{item?.air_date}</Text>
      </View>
      <View style={styles.viewContainer}>
        <Text style={styles.name}>Created: </Text>
        <Text style={styles.textItem}>{formatDate(item?.created)}</Text>
      </View>
      {/* <View style={styles.chContainer}>
        <Text style={styles.name}>Characters : </Text> */}
      {/* <View style={styles.chContainer}>
          <Text style={styles.textCharacters}>{item?.characters}</Text>
        </View> */}
      {/* <View>
          {item?.characters?.map(i => (
            <View key={i?.id}>
              <Text style={styles.textCharacters}>{i}</Text>
            </View>
          ))}
        </View> */}
      {/* </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.TOMATO,
    padding: 20,
  },
  midContainer: {
    margin: 10,
  },
  viewContainer: {
    margin: 3,
    flexDirection: 'row',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
  },

  textItem: {
    color: Colors.species,
    marginLeft: 5,
  },
  iconContainer: {
    position: 'absolute',
    top: 75,
    right: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 15,
  },
  chContainer: {
    flexDirection: 'column',
    margin: 3,
  },
  textCharacters: {
    marginBottom: 5,
  },
});

export default EpisodeCardDetail;
