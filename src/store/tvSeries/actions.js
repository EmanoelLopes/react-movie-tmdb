import types from 'store/tvSeries/actionTypes';
import { instance, params, endpoints } from 'services';
import { setLoading } from 'store/general/actions';

const getTVSeries = payload => {
  return {
    type: types.FETCH_TV_SERIES,
    tvSeries: payload,
  };
};

const getCurrentTVSerie = payload => {
  return {
    type: types.FETCH_CURRENT_TV_SERIE,
    currentTVSerie: payload,
  };
};

const fetchTVSeries = () => {
  return async dispatch => {
    dispatch(setLoading(true));
    try {
      const { popular } = endpoints;
      const { data, status } = await instance.get(popular.tv, {
        params: { ...params },
      });
      const fetchedTVSeries = data.results;
      if (status === 200) {
        dispatch(setLoading(false));
        dispatch(getTVSeries(fetchedTVSeries));
      } else if (status >= 400) {
        dispatch(setLoading(false));
      }
    } catch (e) {
      throw new Error(e);
    }
  };
};

const fetchCurrentTVSerie = id => {
  return async dispatch => {
    dispatch(setLoading(true));
    try {
      const { currentTVserie } = endpoints;
      const { data, status } = await instance.get(`${currentTVserie}/${id}`, {
        params: { ...params },
      });
      if (status === 200) {
        dispatch(setLoading(false));
        dispatch(getCurrentTVSerie(data));
      } else if (status >= 400) {
        dispatch(setLoading(false));
      }
    } catch (e) {
      throw new Error(e);
    }
  };
};

export {
  getTVSeries,
  getCurrentTVSerie,
  fetchTVSeries,
  fetchCurrentTVSerie,
};

