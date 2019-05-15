import types from 'store/movies/actionTypes';
import initialState from 'store/movies/initialState';
import { movies, currentMovie } from 'store/movies/reducers';
import * as moviesData from 'mocks/movies.json';
import * as currentMovieData from 'mocks/currentMovie.json';

const mock = {
  movies: moviesData,
  currentMovie: currentMovieData,
};

describe('Store > Movies > Reducers', () => {
  it('should handle movies reducer', () => {

    const action = {
      type: types.FETCH_MOVIES,
      movies: [],
    };

    const newState = movies(mock.movies, action.type);
    expect(newState).toEqual(mock.movies);

    const resetState = movies(initialState.movies, action.type);
    expect(resetState).toEqual(initialState.movies);
  });

  it('should handle currentMovie reducer', () => {

    const action = {
      type: types.FETCH_CURRENT_MOVIE,
      movie: {},
    };

    const newState = currentMovie(mock.currentMovie, action.type);
    expect(newState).toEqual(mock.currentMovie);

    const resetState = currentMovie(initialState.currentMovie, action.type);
    expect(resetState).toEqual(initialState.currentMovie);
  });
});
