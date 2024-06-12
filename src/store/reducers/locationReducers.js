import {
  CHANGE_PARAMS,
  FETCH_LOCATION,
  FETCH_SINGLE_LOCATION,
  LOAD_MORE_LOCATION,
  PENDING_LOCATION,
  PENDING_SINGLE_LOCATION,
  REJECT_LOCATION,
  REJECT_SINGLE_LOCATION,
  RESET_LOCATION,
} from '../types/locationTypes';

const initialState = {
  type: null,
  locationList: [],
  pending: false,
  error: null,
  singleLocation: {},
  pendingSingleLocation: false,
  errorSingleLocation: null,
  params: {
    page: 1,
    name: null,
    type: null,
    dimension: null,
  },
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATION:
      return {
        ...state,
        locationList: action.payload,
        pending: false,
      };

    case PENDING_LOCATION:
      return {
        ...state,
        pending: true,
      };
    case REJECT_LOCATION:
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
    case LOAD_MORE_LOCATION:
      return {
        ...state,
        locationList: [...state.locationList, ...action.payload],
        pending: false,
      };
    case FETCH_SINGLE_LOCATION:
      return {
        ...state,
        singleLocation: action.payload,
        pendingSingleLocation: false,
      };
    case PENDING_SINGLE_LOCATION:
      return {
        ...state,
        pendingSingleLocation: true,
      };
    case REJECT_SINGLE_LOCATION:
      return {
        ...state,
        pendingSingleLocation: false,
        errorSingleLocation: action.error,
      };
    case RESET_LOCATION:
      return {
        ...state,
        pendingSingleLocation: false,
        errorSingleLocation: null,
        singleLocation: {},
      };

    default:
      return state;
  }
};

export default locationReducer;
