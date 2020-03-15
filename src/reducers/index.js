import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import user from './user';
import car from './car';

const reducer = combineReducers({
  user,
  car,
});

export default createStore(reducer, applyMiddleware(thunk, logger));
