import types from 'store/tvSeries/actionTypes';
import initialState from 'store/tvSeries/initialState';

const tvSeries = function posts(state = initialState.tvSeries, action) {
  switch (action.type) {
    case types.FETCH_TV_SERIES:
      return [
        ...action.tvSeries
      ];
    default:
      return state;
  }
};

const currentTV = function currentTV(state = initialState.currentTVserie, action) {
  switch (action.type) {
    case types.FETCH_CURRENT_TV_SERIE:
      return {
        ...action.currentTVSerie
      };
    default:
      return state;
  }
};

export {
  tvSeries,
  currentTV,
};
