import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {screenStyles} from '../../styles/screenStyles';
import {useDispatch, useSelector} from 'react-redux';
import {
  changePageParams,
  getCharacterList,
  loadMoreData,
} from '../../store/actions/charactersActions';
import Spinner from '../../components/ui/spinner';
import CharacterCard from '../../components/characters/characterCard';

const Characters = () => {
  const {characterList, pending, params} = useSelector(
    state => state.characters,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterList(params));
  }, [params]);

  const handleLoadMore = () => {
    let page = params.page + 1;
    dispatch(changePageParams({page}));
    dispatch(loadMoreData(params));
  };

  return (
    <View style={screenStyles.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          data={characterList}
          renderItem={({item}) => <CharacterCard item={item} />}
          onEndReachedThreshold={0.5}
          onEndReached={handleLoadMore}
          ListFooterComponent={<Spinner />}
        />
      )}
    </View>
  );
};

export default Characters;
