const GenderTypes = {
  MALE: 'Male',
  FEMALE: 'Female',
  UNKNOWN: 'unknown',
};
const StatusTypes = {
  ALIVE: 'Alive',
  UNKNOWN: 'unknown',
  DEAD: 'Dead',
};

const genders = [
  {
    id: 1,
    name: 'Male',
    value: 'male',
  },
  {
    id: 2,
    name: 'Female',
    value: 'female',
  },
  {
    id: 3,
    name: 'Genderless',
    value: 'genderless',
  },
  {
    id: 4,
    name: 'Unknown',
    value: 'unknown',
  },
];

const status = [
  {
    id: 1,
    name: 'Dead',
    value: 'dead',
  },
  {
    id: 2,
    name: 'Alive',
    value: 'alive',
  },
  {
    id: 3,
    name: 'Unknown',
    value: 'unknown',
  },
];

const species = [
  {
    id: 1,
    name: 'Human',
    value: 'Human',
  },
  {
    id: 2,
    name: 'Alien',
    value: 'Alien',
  },
  {
    id: 3,
    name: 'Unknown',
    value: 'Unknown',
  },

  {
    id: 5,
    name: 'Animal',
    value: 'Animal',
  },

  {
    id: 7,
    name: 'Humanoid',
    value: 'Humanoid',
  },
  {
    id: 8,
    name: 'Robot',
    value: 'Robot',
  },

  {
    id: 10,
    name: 'Disease',
    value: 'Disease',
  },

  {
    id: 9,
    name: 'Cronenberg',
    value: 'Cronenberg',
  },
  {
    id: 4,
    name: 'Poopybuttho',
    value: 'Poopybutthole',
  },
  {
    id: 6,
    name: 'Mythological Creature',
    value: 'Mythological Creature',
  },
];
export {GenderTypes, StatusTypes, genders, status, species};
