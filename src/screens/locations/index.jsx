import React, {useCallback, useEffect, useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {screenStyles} from '../../styles/screenStyles';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from '../../components/ui/spinner';
import {
  getLocationList,
  loadLocation,
} from '../../store/actions/locationActions';
import LocationCard from '../../components/location/locationCard';
import CustomButton from '../../components/ui/customButton';
import Colors from '../../themes/colors';
import {LOCATIONDETAIL} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';

const Locations = ({route}) => {
  const navigation = useNavigation();
  const [page, setPage] = useState(1);
  const {locationList, pending, params} = useSelector(state => state.locations);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocationList(params));
  }, [params]);

  const handleLoadMore = useCallback(() => {
    const newPage = page + 1;
    setPage(newPage);
    const updatedParams = {
      ...params,
      page: newPage,
    };
    dispatch(loadLocation(updatedParams));
  }, [page, params, dispatch]);

  return (
    <View style={screenStyles.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          keyExtractor={(item, index) => `${item?.id}-${index}`}
          initialNumToRender={5}
          data={locationList}
          renderItem={({item}) => <LocationCard item={item} />}
          onEndReachedThreshold={0.5}
          onEndReached={handleLoadMore}
          ListFooterComponent={<Spinner />}
        />
      )}
      <View style={styles.bottomContainer}>
        <CustomButton
          onPress={() => navigation.navigate(LOCATIONDETAIL)}
          title="See All Residents in Locations "
          backColor={Colors.GREEN}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: 'row',
    paddingBottom: 15,
    marginTop: 20,
  },
});

export default Locations;
