import types from 'store/tvSeries/actionTypes';
import { tvSeries, currentTV } from 'store/tvSeries/reducers';
import * as tvsData from 'mocks/tvs.json';
import * as currentTVData from 'mocks/currentTV.json';

const mock = {
  tvSeries: tvsData,
  currentTV: currentTVData,
};

describe('Store > TVs > Reducers', () => {
  it('should handle movies reducer', () => {

    const action = {
      type: types.FETCH_TV_SERIES,
      tvSeries: [],
    };

    const newState = tvSeries(mock.tvSeries, action.type);
    expect(newState).toEqual(mock.tvSeries);

    const resetState = tvSeries({}, action.type);
    expect(resetState).toEqual({});
  });

  it('should handle currentTV reducer', () => {

    const action = {
      type: types.FETCH_CURRENT_TV_SERIE,
      currentTV: {},
    };

    const newState = currentTV(mock.currentTV, action.type);
    expect(newState).toEqual(mock.currentTV);

    const resetState = currentTV({}, action.type);
    expect(resetState).toEqual({});
  });
});
