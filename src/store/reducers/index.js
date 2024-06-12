import {combineReducers} from 'redux';
import characterReducer from './charactersReducer';
import episodeReducer from './episodeReducer';
import locationReducer from './locationReducers';

const rootReducer = combineReducers({
  characters: characterReducer,
  episodes: episodeReducer,
  locations: locationReducer,
});

export default rootReducer;
