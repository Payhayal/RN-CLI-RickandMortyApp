import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, TextInput} from 'react-native';
import {screenStyles} from '../../styles/screenStyles';
import {useDispatch, useSelector} from 'react-redux';
import {
  changePageSearchParams,
  searchCharacterList,
} from '../../store/actions/charactersActions';
import SearchItem from './searchItem';
import Colors from '../../themes/colors';
import CustomButton from '../../components/ui/customButton';

const ListHeaderComponent = () => {
  const {searchparams, searchCharacters} = useSelector(
    state => state.characters,
  );
  const [searchText, setSearchText] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(changePageSearchParams({name: searchText, searchparams}));
  };

  const clearCharacters = () => {
    setSearchText(null);
    dispatch(searchCharacterList());
    dispatch(
      changePageSearchParams({
        gender: null,
        status: null,
        species: null,
        page: 1,
        name: null,
      }),
    );
  };
  return (
    <View style={styles.listHeader}>
      <TextInput
        value={searchText}
        returnKeyType="search"
        clearButtonMode="while-editing"
        onSubmitEditing={() => handleSubmit()}
        placeholder="Search Characters"
        style={styles.input}
        onChangeText={text => {
          setSearchText(text);
        }}
      />

      <View style={styles.bottomContainer}>
        <CustomButton
          onPress={() => handleSubmit()}
          title="Search"
          backColor={Colors.GREEN}
        />
        <CustomButton
          onPress={() => clearCharacters()}
          title="Clear"
          backColor={Colors.GRAY}
        />
      </View>
    </View>
  );
};
const SearchCharacters = () => {
  const {searchparams, searchCharacters} = useSelector(
    state => state.characters,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchCharacterList(searchparams));
  }, [searchparams]);

  return (
    <View style={screenStyles.container}>
      <FlatList
        keyExtractor={(item, index) => item?.id}
        data={searchCharacters}
        renderItem={({item}) => <SearchItem item={item} />}
        ListHeaderComponent={ListHeaderComponent}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    width: '95%',
    height: 45,
    backgroundColor: Colors.BACKGROUNDCOLOR,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: Colors.GRAY,
    padding: 10,
  },
  listHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBtn: {
    position: 'absolute',
    top: 10,
    right: 30,
  },
  bottomContainer: {
    flexDirection: 'row',
    padding: 10,
    width: 350,
    height: 70,
  },
});

export default SearchCharacters;
