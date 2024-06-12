import {
  CHANGE_PARAMS,
  FETCH_EPISODE,
  FETCH_SINGLE_EPISODE,
  LOAD_MORE_EPISODE,
  PENDING_EPISODE,
  PENDING_SINGLE_EPISODE,
  REJECT_EPISODE,
  REJECT_SINGLE_EPISODE,
  RESET_EPISODE,
} from '../types/episodeTypes';

const initialState = {
  type: null,
  episodeList: [],
  pending: false,
  error: null,
  singleEpisode: {},
  pendingSingleEpisode: false,
  errorSingleEpisode: null,
  params: {
    page: 1,
    name: null,
  },
};

const episodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EPISODE:
      return {
        ...state,
        episodeList: action.payload,
        pending: false,
      };

    case PENDING_EPISODE:
      return {
        ...state,
        pending: true,
      };
    case REJECT_EPISODE:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case CHANGE_PARAMS:
      return {
        ...state,
        params: {...state.params, ...action.params},
      };
    case LOAD_MORE_EPISODE:
      return {
        ...state,
        episodeList: [...state.episodeList, ...action.payload],
        pending: false,
      };
    case FETCH_SINGLE_EPISODE:
      return {
        ...state,
        singleEpisode: action.payload,
        pendingSingleEpisode: false,
      };
    case PENDING_SINGLE_EPISODE:
      return {
        ...state,
        pendingSingleEpisode: true,
      };
    case REJECT_SINGLE_EPISODE:
      return {
        ...state,
        pendingSingleEpisode: false,
        errorSingleEpisode: action.error,
      };
    case RESET_EPISODE:
      return {
        ...state,
        pendingSingleEpisode: false,
        errorSingleEpisode: null,
        singleEpisode: {},
      };

    default:
      return state;
  }
};

export default episodeReducer;
