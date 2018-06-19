import { createAction } from '../../../utils/index';

const USER_SET_INITIAL_STATE = 'user/USER_SET_INITIAL_STATE';
const USER_SET_OVERALL_RATING = 'user/USER_SET_OVERALL_RATING';
const USER_SET_TEST_RESULT_TYPES = 'user/USER_SET_TEST_RESULT_TYPES';

const userActions = {
  userSetInitialState: createAction(USER_SET_INITIAL_STATE),
  userSetOverallRating: createAction(USER_SET_OVERALL_RATING),
  userSetTestTypesResult: createAction(USER_SET_TEST_RESULT_TYPES)
};

export default userActions;

export {
  USER_SET_INITIAL_STATE,
  USER_SET_OVERALL_RATING,
  USER_SET_TEST_RESULT_TYPES
};
