import Immutable from 'seamless-immutable';
import { USER_SET_INITIAL_STATE, USER_SET_TEST_RESULT_TYPES } from './actions';


const initialState = Immutable.from({
  userModel: {
    overallLevel: 0,
    testTypes: 0
  }
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_SET_INITIAL_STATE:
      return state
        .setIn(['userModel', 'overallLevel'], action.payload);
    case USER_SET_TEST_RESULT_TYPES:
      return state
        .setIn(['userModel', 'testTypes'], action.payload);
    default:
      return state;
  }
}
