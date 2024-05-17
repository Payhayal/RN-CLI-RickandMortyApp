import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../themes/colors';

// create a component
const CustomButton = props => {
  const {backColor, title} = props;
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: backColor}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GREEN,
    padding: 8,
    borderRadius: 5,
    margin: 5,
  },
  title: {
    fontSize: 18,
    color: Colors.WHITE,
  },
});

//make this component available to the app
export default CustomButton;
