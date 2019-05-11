import types from 'store/general/actionTypes';

const setLoading = payload => {
  return {
    type: types.SET_LOADING,
    isLoading: payload,
  };
};

export {
  setLoading,
};
