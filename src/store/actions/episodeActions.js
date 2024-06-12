import {getRequest} from '../../service/httpMethods';
import {EPISODES_URL} from '../../service/urls';
import {
  FETCH_SINGLE_EPISODE,
  LOAD_MORE_EPISODE,
  PENDING_SINGLE_EPISODE,
  REJECT_SINGLE_EPISODE,
  RESET_EPISODE,
  FETCH_EPISODE,
  PENDING_EPISODE,
  REJECT_EPISODE,
  CHANGE_PARAMS,
} from '../types/episodeTypes';

export const getEpisodeList = params => {
  return async dispatch => {
    dispatch({type: PENDING_EPISODE});
    try {
      const res = await getRequest(EPISODES_URL, params);
      // console.log(JSON.stringify(res.data.results, 4, 2));
      dispatch({
        type: FETCH_EPISODE,
        payload: res.data.results,
      });
    } catch (error) {
      dispatch({
        type: REJECT_EPISODE,
        error: error,
      });
    }
  };
};
export const loadEpisode = params => {
  return async dispatch => {
    try {
      const res = await getRequest(EPISODES_URL, params);
      // console.log(JSON.stringify(res.data.results, 4, 2));

      dispatch({
        type: LOAD_MORE_EPISODE,
        payload: res.data.results,
      });
    } catch (error) {
      dispatch({
        type: REJECT_EPISODE,
        error: error,
      });
    }
  };
};
export const getSingleEpisode = episodeID => {
  const url = `${EPISODES_URL}/${episodeID}`;
  return async dispatch => {
    dispatch({type: PENDING_SINGLE_EPISODE});
    try {
      const res = await getRequest(url);
      // console.log(JSON.stringify(res.data, 4, 2));
      dispatch({
        type: FETCH_SINGLE_EPISODE,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: REJECT_SINGLE_EPISODE,
        error: error,
      });
    }
  };
};
export const resetEpisode = () => {
  return async dispatch => {
    dispatch({type: RESET_EPISODE});
  };
};
export const changeParams = params => {
  return async dispatch => {
    dispatch({type: CHANGE_PARAMS, params});
  };
};
