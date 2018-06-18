import { combineReducers } from 'redux';

import appReducer from './app/reducer';
import userReducer from './user/reducer';
import graphReducer from './graph/reducer';

export const reducers = {
  app: appReducer,
  user: userReducer,
  graph: graphReducer
};

const combinedReducers = combineReducers(reducers);

export default combinedReducers;
