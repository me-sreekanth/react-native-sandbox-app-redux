import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'remote-redux-devtools';
import {createLogger} from 'redux-logger';

import apiReducer from './reducers/ApiReducer';

const appReducers = combineReducers({
  apiReducer,
});

//   const rootReducer = (state, action) => appReducers(state, action);

const logger = createLogger();

const middleware = [thunk, logger];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middleware.push(createDebugger());
}

export const store = createStore(appReducers, applyMiddleware(...middleware));
