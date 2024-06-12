import {getRequest} from '../../service/httpMethods';
import {LOCATIONS_URL} from '../../service/urls';
import {
  FETCH_SINGLE_LOCATION,
  LOAD_MORE_LOCATION,
  PENDING_SINGLE_LOCATION,
  REJECT_SINGLE_LOCATION,
  RESET_LOCATION,
  FETCH_LOCATION,
  PENDING_LOCATION,
  REJECT_LOCATION,
  CHANGE_PARAMS,
} from '../types/locationTypes';

export const getLocationList = params => {
  return async dispatch => {
    dispatch({type: PENDING_LOCATION});
    try {
      const res = await getRequest(LOCATIONS_URL, params);
      // console.log('location', JSON.stringify(res.data.results, 4, 2));
      dispatch({
        type: FETCH_LOCATION,
        payload: res.data.results,
      });
    } catch (error) {
      dispatch({
        type: REJECT_LOCATION,
        error: error,
      });
    }
  };
};
export const loadLocation = params => {
  return async dispatch => {
    try {
      const res = await getRequest(LOCATIONS_URL, params);

      dispatch({
        type: LOAD_MORE_LOCATION,
        payload: res.data.results,
      });
    } catch (error) {
      dispatch({
        type: REJECT_LOCATION,
        error: error,
      });
    }
  };
};
export const getSingleLocation = locationID => {
  const url = `${LOCATIONS_URL}/${locationID}`;
  return async dispatch => {
    dispatch({type: PENDING_SINGLE_LOCATION});
    try {
      const res = await getRequest(url);
      // console.log(JSON.stringify(res.data, 4, 2));
      dispatch({
        type: FETCH_SINGLE_LOCATION,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: REJECT_SINGLE_LOCATION,
        error: error,
      });
    }
  };
};
export const resetLocation = () => {
  return async dispatch => {
    dispatch({type: RESET_LOCATION});
  };
};
export const changeParams = params => {
  return async dispatch => {
    dispatch({type: CHANGE_PARAMS, params});
  };
};
