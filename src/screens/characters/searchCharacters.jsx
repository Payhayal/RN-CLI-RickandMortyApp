import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {screenStyles} from '../../styles/screenStyles';
import {useDispatch, useSelector} from 'react-redux';
import {
  changePageParams,
  getCharacterList,
  searchCharacterList,
} from '../../store/actions/charactersActions';
import SearchItem from './searchItem';
import Colors from '../../themes/colors';
import {SearchNormal} from 'iconsax-react-native';

const ListHeaderComponent = () => {
  const {characterList, pending, params} = useSelector(
    state => state.characters,
  );
  const [searchText, setSearchText] = useState(null);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(changePageParams({name: searchText}));
  };
  return (
    <View style={styles.listHeader}>
      <TextInput
        value={searchText}
        returnKeyType="search"
        // clearButtonMode="while-editing"
        onSubmitEditing={handleSubmit}
        placeholder="Search Characters"
        style={styles.input}
        onChangeText={text => {
          setSearchText(text);
        }}
      />
      <TouchableOpacity onPress={() => handleSubmit()} style={styles.searchBtn}>
        <SearchNormal variant="Bulk" color={Colors.TOMATO} />
      </TouchableOpacity>
    </View>
  );
};
const SearchCharacters = () => {
  const {characterList, pending, params, searchCharacters} = useSelector(
    state => state.characters,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchCharacterList(params));
  }, [params]);

  return (
    <View style={screenStyles.container}>
      <FlatList
        data={searchCharacters}
        renderItem={({item}) => <SearchItem item={item} />}
        ListHeaderComponent={ListHeaderComponent}
        // onEndReachedThreshold={0.1}
        // onEndReached={handleLoadMore}
        // ListFooterComponent={<Spinner />}
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
  },
  searchBtn: {
    position: 'absolute',
    top: 10,
    right: 30,
  },
});

export default SearchCharacters;
