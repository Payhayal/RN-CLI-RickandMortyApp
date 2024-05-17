import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import CustomButton from '../../components/ui/customButton';
import Colors from '../../themes/colors';
import {genders, species, status} from '../../utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {changePageParams} from '../../store/actions/charactersActions';

const FilterCharacters = () => {
  const {params} = useSelector(state => state.characters);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const filterCharacters = () => {
    // dispatch(getCharacterList(params));
    navigation.goBack();
  };
  const clearCharacters = () => {
    dispatch(
      changePageParams({gender: null, status: null, species: null, page: 1}),
    );
    navigation.goBack();
  };
  //   console.log(params);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <ScrollView>
          <Text style={styles.title}>Gender</Text>
          <View style={styles.genderContainer}>
            {genders.map(item => (
              <TouchableOpacity
                onPress={() => dispatch(changePageParams({gender: item.value}))}
                key={item.id}
                style={[
                  styles.genders,
                  {
                    backgroundColor:
                      params.gender === item.value
                        ? Colors.GREEN
                        : Colors.TOMATO,
                  },
                ]}>
                <Text style={styles.genderTitle}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.title}>Status</Text>
          <View style={styles.genderContainer}>
            {status.map(item => (
              <TouchableOpacity
                onPress={() => dispatch(changePageParams({status: item.value}))}
                key={item.id}
                style={[
                  styles.genders,
                  {
                    backgroundColor:
                      params.status === item.value
                        ? Colors.GREEN
                        : Colors.TOMATO,
                  },
                ]}>
                <Text style={styles.genderTitle}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.title}>Species</Text>
          <View style={styles.speciesContainer}>
            {species.map(item => (
              <TouchableOpacity
                onPress={() =>
                  dispatch(changePageParams({species: item.value}))
                }
                key={item.id}
                style={[
                  styles.species,
                  {
                    backgroundColor:
                      params.species === item.value
                        ? Colors.GREEN
                        : Colors.TOMATO,
                  },
                ]}>
                <Text style={styles.genderTitle}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      <View style={styles.bottomContainer}>
        <CustomButton
          onPress={filterCharacters}
          title="Filter"
          backColor={Colors.TOMATO}
        />
        <CustomButton
          onPress={clearCharacters}
          title="Clear"
          backColor={Colors.GREEN}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.CharacterColor,
  },
  topContainer: {
    flex: 1,
  },
  bottomContainer: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
  title: {
    fontSize: 18,
    color: Colors.textSpecies,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  genders: {
    padding: 7,
    margin: 3,
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  genderTitle: {
    color: Colors.WHITE,
  },
  speciesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  species: {
    padding: 10,
    margin: 3,
    borderRadius: 5,
    width: '31%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FilterCharacters;
