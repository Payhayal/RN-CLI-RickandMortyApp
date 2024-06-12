import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import Colors from '../../themes/colors';

const EpisodeDetail = () => {
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);

  // Tüm bölümleri çekmek
  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await axios.get(
          'https://rickandmortyapi.com/api/episode',
        );
        setEpisodes(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEpisodes();
  }, []);

  // Seçilen bölümün karakterlerini çekmek
  useEffect(() => {
    const fetchCharacters = async () => {
      if (!selectedEpisode) {
        return;
      }

      try {
        const characterPromises = selectedEpisode.characters.map(url =>
          axios.get(url),
        );
        const characterResponses = await Promise.all(characterPromises);
        const characters = characterResponses.map(response => response.data);
        setCharacters(characters);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacters();
  }, [selectedEpisode]);

  return (
    <View style={styles.container}>
      {selectedEpisode ? (
        <View>
          <Text style={styles.header}>
            Characters in {selectedEpisode?.name}
          </Text>
          <ScrollView>
            {characters.map((character, index) => (
              <View key={index} style={styles.characterContainer}>
                <Image source={{uri: character?.image}} style={styles.image} />
                <Text style={styles.name}>{character?.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      ) : (
        <FlatList
          data={episodes}
          keyExtractor={item => item?.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => setSelectedEpisode(item)}
              style={styles.episodeItem}>
              <Text style={styles.episodeName}>{item?.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.TOMATO,
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
  episodeItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  episodeName: {
    fontSize: 18,
  },
});

export default EpisodeDetail;
