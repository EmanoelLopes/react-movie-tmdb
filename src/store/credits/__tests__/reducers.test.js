import types from 'store/credits/actionTypes';
import initialState from 'store/credits/initialState';
import { cast } from 'store/credits/reducers';
import * as movieCreditsData from 'mocks/movieCredits.json';

const mock = {
  cast: movieCreditsData.cast,
};

describe('Store > Credits > Reducers', () => {
  it('should handle credits reducer', () => {

    const action = {
      type: types.FETCH_CREDITS,
      cast: [],
    };

    const newState = cast(mock.cast, action.type);
    expect(newState).toEqual(mock.cast);

    const resetState = cast(initialState.cast, action.type);
    expect(resetState).toEqual(initialState.cast);
  });
});
