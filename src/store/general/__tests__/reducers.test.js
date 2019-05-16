import { loading } from 'store/general/reducers';
import initialState from 'store/general/initialState';
import types from 'store/general/actionTypes';

describe('Store > General > Reducers', () => {
  it('handles actions of SET_LOADING', () => {
    const action = {
      type: types.SET_LOADING,
      isLoading: false,
    };

    const { isLoading } = initialState;

    const newState = loading(true, action.type);
    expect(newState).toEqual(true);

    const resetState = loading(isLoading, action.type);
    expect(resetState).toEqual(isLoading);
  });
});
