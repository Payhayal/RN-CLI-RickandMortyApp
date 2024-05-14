//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {screenStyles} from '../../styles/screenStyles';

// create a component
const Locations = () => {
  return (
    <View style={screenStyles.container}>
      <Text>Locations</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default Locations;
