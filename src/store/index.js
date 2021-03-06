import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import * as generalReducers from 'store/general/reducers';
import * as moviesReducers from 'store/movies/reducers';
import * as tvSeriesReducers from 'store/tvSeries/reducers';
import * as creditsReducers from 'store/credits/reducers';

const rootReducer = combineReducers({
  ...generalReducers,
  ...moviesReducers,
  ...tvSeriesReducers,
  ...creditsReducers,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk
    )
  )
);

export default store;
