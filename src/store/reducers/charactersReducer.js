import {
  FETCH_CHARACTERS,
  PENDING_CHARACTERS,
  REJECT_CHARACTERS,
  FETCH_SINGLECHARACTER,
  PENDING_SINGLECHARACTER,
  REJECT_SINGLECHARACTER,
  RESET_DATA,
  CHANGE_PARAMS,
  LOAD_MORE_DATA,
  SEARCH_CHARACTERS,
  CHANGE_PAGE_SEARCHPARAMS,
} from '../types/characterTypes';

const initialState = {
  type: null,
  characterList: [],
  searchCharacters: [],
  pending: false,
  error: null,
  singleCharacter: {},
  pendingSingleCharacter: false,
  errorSingleCharacter: null,
  params: {
    page: 1,
    status: null,
    gender: null,
    species: null,
    name: null,
  },
  searchparams: {
    page: 1,
    status: null,
    gender: null,
    species: null,
    name: null,
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
    case SEARCH_CHARACTERS:
      return {
        ...state,
        searchCharacters: action.payload,
        pending: false,
      };
    case LOAD_MORE_DATA:
      return {
        ...state,
        characterList: [...state.characterList, ...action.payload],
        pending: false,
      };
    case PENDING_CHARACTERS:
      return {
        ...state,
        pending: true,
      };
    case REJECT_CHARACTERS:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
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
    case CHANGE_PARAMS:
      return {
        ...state,
        params: {...state.params, ...action.params},
      };
    case CHANGE_PAGE_SEARCHPARAMS:
      return {
        ...state,
        searchparams: {...state.searchparams, ...action.searchparams},
      };

    default:
      return state;
  }
};

export default characterReducer;
