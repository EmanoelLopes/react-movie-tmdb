import types from 'store/movies/actionTypes';
import initialState from 'store/movies/initialState';

const movies = function posts(state = initialState.movies, action) {
  switch (action.type) {
    case types.FETCH_MOVIES:
      return action.movies;
    default:
      return state;
  }
};

export {
  movies,
};
