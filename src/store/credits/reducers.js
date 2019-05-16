import types from 'store/credits/actionTypes';
import initialState from 'store/credits/initialState';

const cast = function cast(state = initialState.cast, action) {
  switch (action.type) {
    case types.GET_CREDITS:
      return [...action.cast.sort((a, b) => {
        if (a.order > b.order) return 1;
        if (a.order < b.order) return -1;
        return 0;
      })];
    default:
      return state;
  }
};

export {
  cast,
};
