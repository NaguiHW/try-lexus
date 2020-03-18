import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import user from './user';
import car from './car';
import appointment from './appointment';

const reducer = combineReducers({
  user,
  car,
  appointment,
});

export default createStore(reducer, applyMiddleware(thunk, logger));
