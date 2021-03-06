import types from 'store/general/actionTypes';
import initialState from 'store/general/initialState';

const loading = function loading (state = initialState.isLoading, action) {
  switch (action.type) {
    case types.SET_LOADING:
      return action.isLoading;
    default:
      return state;
  }
};

export {
  loading,
};
