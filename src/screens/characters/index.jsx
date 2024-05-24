import React, {useEffect, useState} from 'react';
import {View, FlatList, SectionList} from 'react-native';
import {screenStyles} from '../../styles/screenStyles';
import {useDispatch, useSelector} from 'react-redux';
import {
  changePageParams,
  getCharacterList,
  loadMoreData,
  searchCharacterList,
} from '../../store/actions/charactersActions';
import Spinner from '../../components/ui/spinner';
import CharacterCard from '../../components/characters/characterCard';

const Characters = ({route}) => {
  const [page, setPage] = useState(1);
  const {characterList, pending, params} = useSelector(
    state => state.characters,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterList(params));
  }, [params]);

  const handleLoadMore = () => {
    setPage(page + 1);
    const parameters = {
      ...params,
      page: page,
    };
    dispatch(loadMoreData(parameters));
  };

  return (
    <View style={screenStyles.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          keyExtractor={item => item?.id}
          initialNumToRender={5}
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
