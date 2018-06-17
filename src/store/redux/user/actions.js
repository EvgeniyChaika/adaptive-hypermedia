import { createAction } from '../../../utils/index';

const USER_SET_INITIAL_STATE = 'user/USER_SET_INITIAL_STATE';
const USER_SET_OVERALL_RATING = 'user/USER_SET_OVERALL_RATING';

const usetActions = {
  userSetInitialState: createAction(USER_SET_INITIAL_STATE),
  userSetOverallRating: createAction(USER_SET_OVERALL_RATING)
};

export default usetActions;

export {
  USER_SET_INITIAL_STATE,
  USER_SET_OVERALL_RATING
};
