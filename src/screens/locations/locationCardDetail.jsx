import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Colors from '../../themes/colors';

const LocationCardDetail = ({route}) => {
  const {item} = route?.params;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.residentsContainer}>
        <Text style={styles.name}>Residents in {item?.name}: </Text>
        <View>
          {item?.residents?.map((i, index) => (
            <View key={`${i?.id}-${index}`}>
              <Text style={styles.residents}>{i}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.TOMATO,
    padding: 20,
  },
  residentsContainer: {
    margin: 5,
    flexDirection: 'column',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  residents: {
    marginBottom: 5,
  },
});

export default LocationCardDetail;
