import types from 'store/credits/actionTypes';
import { instance, params, endpoints } from 'services';
import { setLoading } from 'store/general/actions';

const getCredits = payload => {
  return {
    type: types.GET_CREDITS,
    cast: payload,
  };
};

const fetchMovieCredits = id => {
  return async dispatch => {
    dispatch(setLoading(true));
    try {
      const { credits, movie } = endpoints;
      const {
        data,
        status
      } = await instance.get(`${movie.current}/${id}${credits}`, {
        params: { ...params },
      });
      const cast = data.cast;
      if (status === 200) {
        dispatch(setLoading(false));
        dispatch(getCredits(cast));
      } else if (status >= 400) {
        dispatch(setLoading(false));
      }
    } catch (e) {
      throw new Error(e);
    }
  };
};

const fetchTVCredits = id => {
  return async dispatch => {
    dispatch(setLoading(true));
    try {
      const { credits, tv } = endpoints;
      const {
        data,
        status
      } = await instance.get(`${tv.current}/${id}${credits}`, {
        params: { ...params },
      });
      const cast = data.cast;
      if (status === 200) {
        dispatch(setLoading(false));
        dispatch(getCredits(cast));
      } else if (status >= 400) {
        dispatch(setLoading(false));
      }
    } catch (e) {
      throw new Error(e);
    }
  };
};

export {
  getCredits,
  fetchMovieCredits,
  fetchTVCredits,
};
