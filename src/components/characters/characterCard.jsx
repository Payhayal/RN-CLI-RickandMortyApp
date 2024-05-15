import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Colors from '../../themes/colors';
import {ArrowCircleRight} from 'iconsax-react-native';
import {GenderIcon, StatusIcon} from './genderIcon';
import {useNavigation} from '@react-navigation/native';
import {CHARACTERDETAIL} from '../../utils/routes';

const CharacterCard = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(CHARACTERDETAIL, {characterID: item.id})
      }
      style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: item.image}} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.species}>{item.species}</Text>
        <View style={styles.midContainer}>
          <View style={styles.statusContainer}>
            <StatusIcon size={15} status={item.status} />
            <Text style={styles.status}>{item.status}</Text>
          </View>
          <View style={styles.genderContainer}>
            <GenderIcon size={15} gender={item.gender} />
            <Text style={styles.gender}>{item.gender}</Text>
          </View>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <ArrowCircleRight size={28} color={Colors.BLACK} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.CharacterColor,
    margin: 5,
    padding: 5,
    borderRadius: 15,
  },
  imageContainer: {
    flex: 1,
  },
  infoContainer: {
    flex: 2,
    justifyContent: 'space-around',
    marginLeft: 15,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
  },
  species: {
    fontWeight: '500',
    color: Colors.textSpecies,
    textTransform: 'uppercase',
    fontSize: 16,
  },
  midContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    gap: 10,
  },
  status: {
    color: Colors.species,
    marginLeft: 5,
  },
  gender: {
    color: Colors.species,
    marginLeft: 5,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CharacterCard;
