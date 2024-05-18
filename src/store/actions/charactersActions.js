import {getRequest} from '../../service/httpMethods';
import {CHARACTERS_URL} from '../../service/urls';
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
  SEARCH_CHARACTERS,
} from '../types/characterTypes';

export const getCharacterList = params => {
  return async dispatch => {
    dispatch({type: PENDING_CHARACTERS});
    try {
      const res = await getRequest(CHARACTERS_URL, params);
      // console.log(JSON.stringify(res.data, 4, 2));
      dispatch({
        type: FETCH_CHARACTERS,
        payload: res.data.results,
      });
    } catch (error) {
      dispatch({
        type: REJECT_CHARACTERS,
        error: error,
      });
    }
  };
};

export const getSingleCharacter = characterID => {
  const url = `${CHARACTERS_URL}/${characterID}`;
  return async dispatch => {
    dispatch({type: PENDING_SINGLECHARACTER});
    try {
      const res = await getRequest(url);
      // console.log(JSON.stringify(res.data, 4, 2));
      dispatch({
        type: FETCH_SINGLECHARACTER,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: REJECT_SINGLECHARACTER,
        error: error,
      });
    }
  };
};

export const resetData = () => {
  return async dispatch => {
    dispatch({type: RESET_DATA});
  };
};

export const changePageParams = params => {
  return async dispatch => {
    dispatch({type: CHANGE_PAGE_PARAMS, params});
  };
};

export const loadMoreData = params => {
  return async dispatch => {
    try {
      const res = await getRequest(CHARACTERS_URL, params);

      dispatch({
        type: LOAD_MORE_DATA,
        payload: res.data.results,
      });
    } catch (error) {
      dispatch({
        type: REJECT_CHARACTERS,
        error: error,
      });
    }
  };
};

export const searchCharacterList = params => {
  return async dispatch => {
    dispatch({type: PENDING_CHARACTERS});
    try {
      const res = await getRequest(CHARACTERS_URL, params);
      dispatch({
        type: SEARCH_CHARACTERS,
        payload: res.data.results,
      });
    } catch (error) {
      dispatch({
        type: REJECT_CHARACTERS,
        error: error,
      });
    }
  };
};
