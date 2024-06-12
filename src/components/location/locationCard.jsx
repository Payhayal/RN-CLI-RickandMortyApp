import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../themes/colors';
import {ArrowCircleRight} from 'iconsax-react-native';

const LocationCard = ({item}) => {
  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: '2-digit',
    });
  };

  return (
    <TouchableOpacity style={styles.container}>
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
          <Text style={styles.name}>Type:</Text>
          <Text style={styles.textItem}>{item?.type}</Text>
        </View>
        <View style={styles.viewContainer}>
          <Text style={styles.name}>Dimension: </Text>
          <Text style={styles.textItem}>{item?.dimension}</Text>
        </View>
        <View style={styles.viewContainer}>
          <Text style={styles.name}>Url:</Text>
          <Text style={styles.textItem}>{item?.url}</Text>
        </View>
        <View style={styles.viewContainer}>
          <Text style={styles.name}>Created:</Text>
          <Text style={styles.textItem}>{formatDate(item?.created)}</Text>
        </View>
        {/* <View style={styles.residentsContainer}>
          <Text style={styles.name}>Residents: </Text>
          <Text style={styles.residents}>{item?.residents}</Text> */}
        {/* <View>
            {item?.residents?.map(i => (
              <View key={i?.id}>
                <Text style={styles.residents}>{i}</Text>
              </View>
            ))}
          </View> */}
        {/* </View> */}
        {/* <View style={styles.iconContainer}>
          <ArrowCircleRight size={28} color={Colors.TOMATO} />
        </View> */}
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
  residentsContainer: {
    margin: 3,
    flexDirection: 'column',
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
  residents: {
    marginBottom: 5,
  },
});

export default LocationCard;
