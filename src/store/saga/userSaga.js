/* eslint-disable no-console */
import { put } from 'redux-saga/effects';

import userActions from '../redux/user/actions';
import { getRandomValue } from '../../utils';

export default function* userSetOverallRating() {
  try {
    const userInitialRating = getRandomValue();
    yield put(userActions.userSetInitialState(userInitialRating));
  } catch (error) {
    console.log(error);
  }
}
