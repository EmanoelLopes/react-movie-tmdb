import types from 'store/credits/actionTypes';
import initialState from 'store/credits/initialState';
import { sortedCast } from 'utils/helpers';

const cast = function cast(state = initialState.cast, action) {
  switch (action.type) {
    case types.GET_CREDITS:
      return [...sortedCast(action.cast)];
    default:
      return state;
  }
};

export {
  cast,
};
