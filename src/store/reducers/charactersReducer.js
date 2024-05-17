import {
  FETCH_CHARACTERS,
  PENDING_CHARACTERS,
  REJECT_CHARACTERS,
  FETCH_SINGLECHARACTER,
  PENDING_SINGLECHARACTER,
  REJECT_SINGLECHARACTER,
  RESET_DATA,
  CHANGE_PAGE_PARAMS,
  LOAD_MORE_DATA,
} from '../types/characterTypes';

const initialState = {
  characterList: [],
  singleCharacter: {},
  pending: false,
  pendingSingleCharacter: false,
  error: null,
  errorSingleCharacter: null,
  params: {
    page: 1,
  },
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        characterList: action.payload,
        pending: false,
      };
    case LOAD_MORE_DATA:
      return {
        ...state,
        characterList: [...state.characterList, ...action.payload],
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

    case RESET_DATA:
      return {
        ...state,
        pendingSingleCharacter: false,
        errorSingleCharacter: null,
        singleCharacter: {},
      };
    case CHANGE_PAGE_PARAMS:
      return {
        ...state,
        params: action.params,
      };

    default:
      return state;
  }
};

export default characterReducer;
