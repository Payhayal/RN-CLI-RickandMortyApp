import {getRequest} from '../../service/httpMethods';
import {CHARACTERS_URL} from '../../service/urls';
import {
  FETCH_CHARACTERS,
  PENDING_CHARACTERS,
  REJECT_CHARACTERS,
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
