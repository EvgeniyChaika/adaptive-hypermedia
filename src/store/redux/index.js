import { combineReducers } from 'redux';

import appReducer from './app/reducer';
import userReducer from './user/reducer';

export const reducers = {
  app: appReducer,
  user: userReducer
};

const combinedReducers = combineReducers(reducers);

export default combinedReducers;
