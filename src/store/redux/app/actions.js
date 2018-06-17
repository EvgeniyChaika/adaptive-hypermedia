import { createAction } from '../../../utils/index';

const APPLICATION_INIT_START = 'app/APPLICATION_INIT_START';

const appActions = {
  appInitialization: createAction(APPLICATION_INIT_START),
};

export default appActions;

export {
  APPLICATION_INIT_START
};
