import {getRequest} from '../../service/httpMethods';
import {CHARACTERS_URL} from '../../service/urls';
import {
  FETCH_CHARACTERS,
  PENDING_CHARACTERS,
  REJECT_CHARACTERS,
  FETCH_SINGLECHARACTER,
  PENDING_SINGLECHARACTER,
  REJECT_SINGLECHARACTER,
} from '../types/characterTypes';

export const getCharacterList = params => {
  return async dispatch => {
    dispatch({type: PENDING_CHARACTERS});
    try {
      const res = await getRequest(CHARACTERS_URL);
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
