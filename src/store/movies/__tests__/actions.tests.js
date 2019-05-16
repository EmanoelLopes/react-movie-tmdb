import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import types from 'store/movies/actionTypes';
import {
  getMovies,
  fetchMovies,
  getCurrentMovie,
  fetchCurrentMovie,
} from 'store/movies/actions';
import * as moviesData from 'mocks/movies.json';
import * as currentMovieData from 'mocks/currentMovie.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

describe('Store > Movies > Actions', () => {
  describe('getMovies', () => {
    it('creates successfully FETCH_MOVIES', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: moviesData,
        });
      });

      const expectedAction = [
        {
          type: types.FETCH_MOVIES,
          movies: moviesData,
        },
        {
          type: 'general:SET_LOADING',
          isLoading: true,
        },
      ];

      const store = mockStore({
        movies: [],
      });

      store.dispatch(getMovies(moviesData));
      store.dispatch(fetchMovies());
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  describe('getMovies', () => {
    it('creates FETCH_CURRENT_MOVIES', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: currentMovieData,
        });
      });

      const expectedAction = [
        {
          type: types.FETCH_CURRENT_MOVIE,
          currentMovie: currentMovieData,
        },
        {
          type: 'general:SET_LOADING',
          isLoading: true,
        },
      ];

      const store = mockStore({
        getCurrentMovue: {},
      });

      store.dispatch(getCurrentMovie(currentMovieData));
      store.dispatch(fetchCurrentMovie());
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
