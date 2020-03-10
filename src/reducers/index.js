import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import user from './user';

const reducer = combineReducers({
  user,
});

export default createStore(reducer, applyMiddleware(thunk, logger));
