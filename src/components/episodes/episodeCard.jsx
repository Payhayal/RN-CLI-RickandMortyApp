import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../themes/colors';
import {EPISODECARDDETAIL} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';
import {ArrowCircleRight} from 'iconsax-react-native';

const EpisodeCard = ({item}) => {
  const navigation = useNavigation();

  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: '2-digit',
    });
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(EPISODECARDDETAIL, {item: item})}
      style={styles.container}>
      <View style={styles.midContainer}>
        <View style={styles.viewContainer}>
          <Text style={styles.name}>Number: </Text>
          <Text style={styles.name}>{item?.id}</Text>
        </View>
        <View style={styles.viewContainer}>
          <Text style={styles.name}>Name: </Text>
          <Text style={styles.name}>{item?.name}</Text>
        </View>
        <View style={styles.viewContainer}>
          <Text style={styles.name}>Episode:</Text>
          <Text style={styles.textItem}>{item?.url}</Text>
        </View>
        <View style={styles.viewContainer}>
          <Text style={styles.name}>Date: </Text>
          <Text style={styles.textItem}>{item?.air_date}</Text>
        </View>
        <View style={styles.viewContainer}>
          <Text style={styles.name}>Created: </Text>
          <Text style={styles.textItem}>{formatDate(item?.created)}</Text>
        </View>
        <View style={styles.iconContainer}>
          <ArrowCircleRight size={28} color={Colors.TOMATO} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.CharacterColor,
    marginTop: 15,
    borderRadius: 15,
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
});

export default EpisodeCard;
