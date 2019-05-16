import types from 'store/general/actionTypes';
import { setLoading } from 'store/general/actions';
import store from 'store';

describe('Store > General > Actions', () => {
  it('setLoading - should return expected action', () => {

    const expetedAction = {
      type: types.SET_LOADING,
      isLoading: true,
    };

    const dispatchedAction = store.dispatch(setLoading(true));
    expect(dispatchedAction).toEqual(expetedAction);
  });
});
