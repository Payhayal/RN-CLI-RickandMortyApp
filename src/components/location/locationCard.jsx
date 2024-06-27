import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Colors from '../../themes/colors';
import CustomButton from '../ui/customButton';
import {useNavigation} from '@react-navigation/native';
import {LOCATIONCARDDETAIL} from '../../utils/routes';

const LocationCard = ({item}) => {
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
    <Pressable style={styles.container}>
      <View style={styles.midContainer}>
        <View style={styles.viewContainer}>
          <Text style={styles.name}>Location : </Text>
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
        <View style={styles.bottomContainer}>
          <CustomButton
            onPress={() =>
              navigation.navigate(LOCATIONCARDDETAIL, {item: item})
            }
            title="See Residents"
            backColor={Colors.TOMATO}
          />
        </View>
      </View>
    </Pressable>
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
  bottomContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
    marginTop: 10,
    width: 220,
    marginHorizontal: 50,
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

export default LocationCard;
