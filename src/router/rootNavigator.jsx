import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import {
  CHARACTERDETAIL,
  FILTERCHARACTERS,
  SEARCHCHARACTERS,
  TABNAVIGATOR,
} from '../utils/routes';
import CharacterDetail from '../screens/characters/characterDetail';
import Colors from '../themes/colors';
import FilterCharacters from '../screens/characters/filterCharacters';
import SearchCharacters from '../screens/characters/searchCharacters';

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
    </Stack.Navigator>
  );
}
export default RootNavigator;
