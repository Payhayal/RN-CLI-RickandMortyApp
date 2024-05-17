import React from 'react';
import {StyleSheet, View} from 'react-native';
import {screenStyles} from '../../styles/screenStyles';
import CustomButton from '../../components/ui/customButton';
import Colors from '../../themes/colors';

const FilterCharacters = () => {
  return (
    <View style={screenStyles.container}>
      <View style={styles.topContainer}></View>
      <View style={styles.bottomContainer}>
        <CustomButton title="Filter" backColor={Colors.GREEN} />
        <CustomButton title="Clear" backColor={Colors.BLUE} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },
  bottomContainer: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
});

export default FilterCharacters;
