import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as generalReducers from 'store/general/reducers';
import * as moviesReducers from 'store/movies/reducers';
import * as tvSeriesReducers from 'store/tvSeries/reducers';

const rootReducer = combineReducers({
  ...generalReducers,
  ...moviesReducers,
  ...tvSeriesReducers,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )
);

export default store;
