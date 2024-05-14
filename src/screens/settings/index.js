//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {screenStyles} from '../../styles/screenStyles';

// create a component
const Settings = () => {
  return (
    <View style={screenStyles.container}>
      <Text>Settings</Text>
    </View>
  );
};

//make this component available to the app
export default Settings;
