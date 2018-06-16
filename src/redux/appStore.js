import { compose, createStore } from 'redux';
import combinedReducers from './reducers';

const configure = (rootReducer) => {
  const enhancers = [];
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }
  return createStore(
    rootReducer,
    compose(...enhancers)
  );
};

export default configure(combinedReducers);
