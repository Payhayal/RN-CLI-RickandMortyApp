import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import {CHARACTERDETAIL, TABNAVIGATOR} from '../utils/routes';
import CharacterDetail from '../screens/characters/characterDetail';
import Colors from '../themes/colors';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.TOMATO, color: Colors.BLACK},
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
      <Stack.Screen
        options={{
          headerStyle: {backgroundColor: Colors.BACKGROUNDCOLOR},
        }}
        name={CHARACTERDETAIL}
        component={CharacterDetail}
      />
    </Stack.Navigator>
  );
}
export default RootNavigator;
