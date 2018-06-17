/* eslint-disable no-console */
import { put } from 'redux-saga/effects';

import appActions from '../redux/app/actions';

export default function* initializeApplication() {
  try {
    yield put(appActions.appInitialization(true));
  } catch (error) {
    console.log(error);
  }
}
