import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import types from 'store/credits/actionTypes';
import {
  getCredits,
  fetchMovieCredits,
  fetchTVCredits,
} from 'store/credits/actions';
import * as movieCreditsData from 'mocks/movieCredits.json';
import * as tvCreditsData from 'mocks/tvCredits.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

describe('Store > Credits > Actions', () => {
  describe('getCredits', () => {
    it('creates successfully Movies FETCH_CREDITS', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: movieCreditsData,
        });
      });

      const expectedAction = [
        {
          type: types.GET_CREDITS,
          cast: movieCreditsData,
        },
        {
          type: 'general:SET_LOADING',
          isLoading: true,
        },
      ];

      const store = mockStore({
        cast: [],
      });

      store.dispatch(getCredits(movieCreditsData));
      store.dispatch(fetchMovieCredits());
      expect(store.getActions()).toEqual(expectedAction);
    });

    it('creates successfully TV FETCH_CREDITS', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: tvCreditsData,
        });
      });

      const expectedAction = [
        {
          type: types.GET_CREDITS,
          cast: tvCreditsData,
        },
        {
          type: 'general:SET_LOADING',
          isLoading: true,
        },
      ];

      const store = mockStore({
        cast: [],
      });

      store.dispatch(getCredits(tvCreditsData));
      store.dispatch(fetchTVCredits());
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
