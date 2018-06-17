import { fork, all } from 'redux-saga/effects';

import initializeApplication from './../saga/appSaga';

export default function* sagas() {
  yield all([
    fork(initializeApplication)
  ]);
}
