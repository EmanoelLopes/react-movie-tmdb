import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import types from 'store/tvSeries/actionTypes';
import {
  getTVSeries,
  fetchTVSeries,
  getCurrentTVSerie,
  fetchCurrentTVSerie,
} from 'store/tvSeries/actions';
import * as tvsData from 'mocks/tvs.json';
import * as currentTVData from 'mocks/currentTV.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

describe('Store > TVSeries > Actions', () => {
  describe('getTVSeries', () => {
    it('creates successfully FETCH_TV_SERIES', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: tvsData,
        });
      });

      const expectedAction = [
        {
          type: types.FETCH_TV_SERIES,
          tvSeries: tvsData,
        },
        {
          type: 'general:SET_LOADING',
          isLoading: true,
        },
      ];

      const store = mockStore({
        tvSeries: [],
      });

      store.dispatch(getTVSeries(tvsData));
      store.dispatch(fetchTVSeries());
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  describe('getTVSeries', () => {
    it('creates FETCH_CURRENT_TV', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: currentTVData,
        });
      });

      const expectedAction = [
        {
          type: types.FETCH_CURRENT_TV_SERIE,
          currentTVSerie: currentTVData,
        },
        {
          type: 'general:SET_LOADING',
          isLoading: true,
        },
      ];

      const store = mockStore({
        getCurrentTV: {},
      });

      store.dispatch(getCurrentTVSerie(currentTVData));
      store.dispatch(fetchCurrentTVSerie());
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
