/* eslint-disable no-console */
import { put } from 'redux-saga/effects';

import appActions from '../redux/app/actions';
import userActions from '../redux/user/actions';

export default function* initializeApplication() {
  try {
    yield put(appActions.appInitialization(true));
    yield put(userActions.userSetOverallRating());
  } catch (error) {
    console.log(error);
  }
}
