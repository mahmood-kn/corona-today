import { createStore, applyMiddleware, compose } from 'redux';
import mainReducer from './reducers/main';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  mainReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
