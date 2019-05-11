import types from 'store/movies/actionTypes';
import { instance, params, endpoints } from 'services';
import { setLoading } from 'store/general/actions';

const getMovies = payload => {
  return {
    type: types.FETCH_MOVIES,
    movies: payload,  
  };
};

const fetchMovies = () => {
  return async dispatch => {
    dispatch(setLoading(true));
    try {
      const { popular } = endpoints;
      const { data, status } = await instance.get(popular.movies, {
        params: { ...params },
      });
      const fetchedMovies = data.results;
      if (status === 200) {
        dispatch(setLoading(false));
        dispatch(getMovies(fetchedMovies));
      } else if (status >= 400) {
        dispatch(setLoading(false));
      }
    } catch (e) {
      throw new Error(e);
    }
  };
};

export {
  getMovies,
  fetchMovies,
};

