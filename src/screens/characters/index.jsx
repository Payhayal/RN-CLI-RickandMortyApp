import React, {useCallback, useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {screenStyles} from '../../styles/screenStyles';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeParams,
  getCharacterList,
  loadMoreData,
} from '../../store/actions/charactersActions';
import Spinner from '../../components/ui/spinner';
import CharacterCard from '../../components/characters/characterCard';
import {useFocusEffect} from '@react-navigation/native';

const Characters = ({route}) => {
  const {characterList, pending, params} = useSelector(
    state => state.characters,
  );
  const dispatch = useDispatch();
  const [page, setPage] = useState(params.page || 1);

  useEffect(() => {
    dispatch(getCharacterList(params));
  }, [params, dispatch]);

  useEffect(() => {
    dispatch(changeParams({...params, page: 1}));
    setPage(1);
  }, [dispatch]);

  useFocusEffect(
    useCallback(() => {
      return () => {
        dispatch(
          changeParams({gender: null, status: null, species: null, page: 1}),
        );
        setPage(1);
      };
    }, [dispatch]),
  );

  const handleLoadMore = useCallback(() => {
    const newPage = page + 1;
    setPage(newPage);
    const updatedParams = {
      ...params,
      page: newPage,
    };
    dispatch(loadMoreData(updatedParams));
  }, [page, params, dispatch]);

  return (
    <View style={screenStyles.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          keyExtractor={(item, index) => `${item?.id}-${index}`}
          initialNumToRender={5}
          data={characterList}
          renderItem={({item}) => <CharacterCard item={item} />}
          onEndReachedThreshold={0.5}
          onEndReached={handleLoadMore}
        />
      )}
    </View>
  );
};

export default Characters;
