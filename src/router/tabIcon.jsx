import React from 'react';
import {CHARACTERS, EPISODES, LOCATIONS, SETTINGS} from '../utils/routes';
import {Location, Setting2, User, VideoPlay} from 'iconsax-react-native';

const TabIcon = ({IconName, size, focused, color}) => {
  if (IconName === CHARACTERS) {
    return (
      <User size={30} color={color} variant={focused ? 'Bold' : 'Outline'} />
    );
  }
  if (IconName === EPISODES) {
    return (
      <VideoPlay
        size={30}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  }
  if (IconName === LOCATIONS) {
    return (
      <Location
        size={30}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  }
  if (IconName === SETTINGS) {
    return (
      <Setting2
        size={30}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  }
};

export default TabIcon;
