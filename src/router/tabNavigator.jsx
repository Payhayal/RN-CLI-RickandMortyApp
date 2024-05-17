import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Characters from '../screens/characters';
import Episodes from '../screens/episodes';
import Locations from '../screens/locations';
import Settings from '../screens/settings';
import {tabBarStyle} from '../styles/tabBarStyle';
import {CHARACTERS, EPISODES, LOCATIONS, SETTINGS} from '../utils/routes';
import Colors from '../themes/colors';
import TabIcon from './tabIcon';
import HeaderRight from './headerRight';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            IconName={route.name}
            size={size}
            color={color}
            focused={focused}
          />
        ),
        headerStyle: tabBarStyle.headerStyle,
        tabBarStyle: tabBarStyle.tabBarStyle,
        tabBarActiveTintColor: Colors.TOMATO,
        headerRight: props => <HeaderRight />,
      })}>
      <Tab.Screen name={CHARACTERS} component={Characters} />
      <Tab.Screen name={EPISODES} component={Episodes} />
      <Tab.Screen name={LOCATIONS} component={Locations} />
      <Tab.Screen name={SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
}
