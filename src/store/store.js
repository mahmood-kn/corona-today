import { createStore, applyMiddleware, compose } from 'redux';
import mainReducer from './reducers/main';
import createSagaMiddleware from 'redux-saga';
import { watchMain } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const initialState = {
  all: null,
  yesterday: null,
  loading: true,
  countries: null,
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  mainReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(watchMain);

export default store;
