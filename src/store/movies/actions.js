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

const fetchCurrentMovie = id => {
  return async dispatch => {
    dispatch(setLoading(true));
    try {
      const { currentMovie } = endpoints;
      const { data, status } = await instance.get(`${currentMovie}/${id}`, {
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

