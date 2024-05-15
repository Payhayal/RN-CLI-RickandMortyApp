import {
  FETCH_CHARACTERS,
  PENDING_CHARACTERS,
  REJECT_CHARACTERS,
  FETCH_SINGLECHARACTER,
  PENDING_SINGLECHARACTER,
  REJECT_SINGLECHARACTER,
} from '../types/characterTypes';

const initialState = {
  characterList: [],
  singleCharacter: {},
  pending: false,
  pendingSingleCharacter: false,
  error: null,
  errorSingleCharacter: null,
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        characterList: action.payload,
        pending: false,
      };
    case PENDING_CHARACTERS:
      return {
        ...state,
        pending: true,
      };
    case REJECT_CHARACTERS:
    case FETCH_SINGLECHARACTER:
      return {
        ...state,
        singleCharacter: action.payload,
        pendingSingleCharacter: false,
      };
    case PENDING_SINGLECHARACTER:
      return {
        ...state,
        pendingSingleCharacter: true,
      };
    case REJECT_SINGLECHARACTER:
      return {
        ...state,
        pendingSingleCharacter: false,
        errorSingleCharacter: action.error,
      };

      return {
        ...state,
        pending: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default characterReducer;
