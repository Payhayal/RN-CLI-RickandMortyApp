import {FilterEdit, SearchNormal} from 'iconsax-react-native';
import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Colors from '../themes/colors';
import {useNavigation} from '@react-navigation/native';
import {FILTERCHARACTERS, SEARCHCHARACTERS} from '../utils/routes';

const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate(SEARCHCHARACTERS)}
        style={styles.button}>
        <SearchNormal size={25} color={Colors.BLACK} />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate(FILTERCHARACTERS)}
        style={styles.button}>
        <FilterEdit size={25} color={Colors.BLACK} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  button: {
    marginHorizontal: 5,
  },
});

export default HeaderRight;
