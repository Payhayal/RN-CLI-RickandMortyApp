import React from 'react';
import {GenderTypes, StatusTypes} from '../../utils/constants';
import {
  Man,
  MinusCirlce,
  Okb,
  RecordCircle,
  TickCircle,
  Woman,
} from 'iconsax-react-native';
import Colors from '../../themes/colors';

export const GenderIcon = ({gender, size}) => {
  if (gender === GenderTypes.MALE) {
    return <Man size={size} color={Colors.BLUE} variant={'Bold'} />;
  }
  if (gender === GenderTypes.FEMALE) {
    return <Woman size={size} color={Colors.PINK} variant={'Bold'} />;
  }
  if (gender === GenderTypes.UNKNOWN) {
    return <Okb size={size} color={Colors.BLACK} variant={'Bold'} />;
  }
};
export const StatusIcon = ({status, size}) => {
  if (status === StatusTypes.ALIVE) {
    return <TickCircle size={size} color={Colors.GREEN} variant={'Bold'} />;
  }
  if (status === StatusTypes.DEAD) {
    return <MinusCirlce size={size} color={Colors.RED} variant={'Bold'} />;
  }
  if (status === StatusTypes.UNKNOWN) {
    return <RecordCircle size={size} color={Colors.GRAY} variant={'Bold'} />;
  }
};
