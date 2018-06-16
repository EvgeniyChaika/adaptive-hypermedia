import { combineReducers } from 'redux';

import appReducer from './appReducer';

export const reducers = {
  app: appReducer,
};

const combinedReducers = combineReducers(reducers);

export default combinedReducers;
