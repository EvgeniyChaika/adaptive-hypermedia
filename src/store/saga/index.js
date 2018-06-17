import { takeEvery, fork, all } from 'redux-saga/effects';

import { USER_SET_OVERALL_RATING } from './../redux/user/actions';
import initializeApplication from './../saga/appSaga';
import userSetOverallRating from './../saga/userSaga';

export default function* sagas() {
  yield all([
    takeEvery(USER_SET_OVERALL_RATING, userSetOverallRating),
    fork(initializeApplication)
  ]);
}
