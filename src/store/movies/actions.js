import types from 'store/movies/actionTypes';
import { instance, params, endpoints } from 'services';
import { setLoading } from 'store/general/actions';

const getMovies = payload => {
  return {
    type: types.FETCH_MOVIES,
    movies: payload,  
  };
};

const getCurrentMovie = payload => {
  return {
    type: types.FETCH_CURRENT_MOVIE,
    currentMovie: payload,
  };
};

const fetchMovies = type => {
  return async dispatch => {
    dispatch(setLoading(true));
    try {
      const { data, status } = await instance.get(type, {
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

const fetchCurrentMovie = id => {
  return async dispatch => {
    dispatch(setLoading(true));
    try {
      const { data, status } = await instance.get(`${endpoints.movie.current}/${id}`, {
        params: { ...params },
      });
      const movie = data;
      if (status === 200) {
        dispatch(setLoading(false));
        dispatch(getCurrentMovie(movie));
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
  getCurrentMovie,
  fetchMovies,
  fetchCurrentMovie,
};

