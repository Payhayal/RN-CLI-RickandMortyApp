import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {EPISODEDETAIL} from '../../utils/routes';
import Colors from '../../themes/colors';
import CustomButton from '../../components/ui/customButton';
import {screenStyles} from '../../styles/screenStyles';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from '../../components/ui/spinner';
import EpisodeCard from '../../components/episodes/episodeCard';
import {getEpisodeList, loadEpisode} from '../../store/actions/episodeActions';

const Episodes = ({route}) => {
  const navigation = useNavigation();

  const [page, setPage] = useState(1);
  const {episodeList, pending, params} = useSelector(state => state.episodes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEpisodeList(params));
  }, [params]);

  // console.log('index', JSON.stringify(episodeList, 4, 2));

  const handleLoadMore = () => {
    setPage(page + 1);
    const parameters = {
      ...params,
      page: page + 1,
    };
    dispatch(loadEpisode(parameters));
  };

  return (
    <View style={screenStyles.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          keyExtractor={(item, index) => `${item?.id}-${index}`}
          initialNumToRender={4}
          data={episodeList}
          renderItem={({item}) => <EpisodeCard item={item} />}
          onEndReachedThreshold={0.5}
          onEndReached={handleLoadMore}
          ListFooterComponent={<Spinner />}
        />
      )}
      <View style={styles.bottomContainer}>
        <CustomButton
          onPress={() => navigation.navigate(EPISODEDETAIL)}
          title="See Which Characters Play in Episodes"
          backColor={Colors.GREEN}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.TOMATO,
  },
  bottomContainer: {
    flexDirection: 'row',
    paddingBottom: 20,
    marginTop: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  characterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  episodeItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  episodeName: {
    fontSize: 18,
  },
});

export default Episodes;
