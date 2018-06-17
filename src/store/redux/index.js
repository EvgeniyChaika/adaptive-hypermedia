import { combineReducers } from 'redux';

import appReducer from './app/reducer';

export const reducers = {
  app: appReducer,
};

const combinedReducers = combineReducers(reducers);

export default combinedReducers;
