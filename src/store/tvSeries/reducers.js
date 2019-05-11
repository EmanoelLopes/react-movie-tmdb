import types from 'store/tvSeries/actionTypes';
import initialState from 'store/tvSeries/initialState';

const tvSeries = function posts(state = initialState.tvSeries, action) {
  switch (action.type) {
    case types.FETCH_TV_SERIES:
      return action.tvSeries;
    default:
      return state;
  }
};

export {
  tvSeries,
};
