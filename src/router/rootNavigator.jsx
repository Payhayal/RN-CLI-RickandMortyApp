import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import {
  CHARACTERDETAIL,
  EPISODECARDDETAIL,
  EPISODEDETAIL,
  FILTERCHARACTERS,
  LOCATIONCARDDETAIL,
  LOCATIONDETAIL,
  SEARCHCHARACTERS,
  TABNAVIGATOR,
} from '../utils/routes';
import CharacterDetail from '../screens/characters/characterDetail';
import Colors from '../themes/colors';
import FilterCharacters from '../screens/characters/filterCharacters';
import SearchCharacters from '../screens/characters/searchCharacters';
import EpisodeDetail from '../screens/episodes/episodeDetail';
import EpisodeCardDetail from '../screens/episodes/episodeCardDetail';
import LocationCardDetail from '../screens/locations/locationCardDetail';
import LocationDetail from '../screens/locations/locationDetail';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.BACKGROUNDCOLOR,
          color: Colors.BLACK,
        },
        headerBackTitle: 'Back',
        headerTintColor: Colors.BLACK,
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={TABNAVIGATOR}
        component={TabNavigator}
      />
      <Stack.Screen name={CHARACTERDETAIL} component={CharacterDetail} />
      <Stack.Screen
        options={{
          backgroundColor: Colors.TOMATO,
        }}
        name={FILTERCHARACTERS}
        component={FilterCharacters}
      />
      <Stack.Screen name={SEARCHCHARACTERS} component={SearchCharacters} />
      <Stack.Screen name={EPISODEDETAIL} component={EpisodeDetail} />
      <Stack.Screen name={LOCATIONDETAIL} component={LocationDetail} />
      <Stack.Screen name={EPISODECARDDETAIL} component={EpisodeCardDetail} />
      <Stack.Screen name={LOCATIONCARDDETAIL} component={LocationCardDetail} />
    </Stack.Navigator>
  );
}
export default RootNavigator;
