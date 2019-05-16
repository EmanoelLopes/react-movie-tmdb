import types from 'store/movies/actionTypes';
import initialState from 'store/movies/initialState';

const movies = function movies(state = initialState.movies, action) {
  switch (action.type) {
    case types.FETCH_MOVIES:
      return [ ...action.movies ];
    default:
      return state;
  }
};

const currentMovie = function currentMovie(state = initialState.currentMovie, action) {
  switch (action.type) {
    case types.FETCH_CURRENT_MOVIE:
      return { ...action.currentMovie };
    default:
      return state;
  }
};

export {
  movies,
  currentMovie,
};
