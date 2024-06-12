import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {screenStyles} from '../../styles/screenStyles';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from '../../components/ui/spinner';
import {
  getLocationList,
  loadLocation,
} from '../../store/actions/locationActions';
import LocationCard from '../../components/location/locationCard';

const Locations = ({route}) => {
  const [page, setPage] = useState(1);
  const {locationList, pending, params} = useSelector(state => state.locations);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocationList(params));
  }, [params]);

  // console.log('index', JSON.stringify(locationList, 4, 2));

  const handleLoadMore = () => {
    setPage(page + 1);
    const parameters = {
      ...params,
      page: page,
    };
    dispatch(loadLocation(parameters));
  };
  // console.log(page);

  return (
    <View style={screenStyles.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          keyExtractor={item => item?.id}
          initialNumToRender={5}
          data={locationList}
          renderItem={({item}) => <LocationCard item={item} />}
          onEndReachedThreshold={0.5}
          onEndReached={handleLoadMore}
          ListFooterComponent={<Spinner />}
        />
      )}
    </View>
  );
};

export default Locations;
