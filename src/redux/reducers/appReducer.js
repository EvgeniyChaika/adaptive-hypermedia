import Immutable from 'seamless-immutable';
import { createAction } from '../../utils';

const APPLICATION_INIT_START = 'app/APPLICATION_INIT_START';

export const appActions = {
  appInitialization: createAction(APPLICATION_INIT_START),
};

const initState = Immutable.from({
  initialized: false
});

export default function reducer(state = initState, action) {
  switch (action.type) {
    case APPLICATION_INIT_START: return state
      .set('initialized', true);
    default: return state;
  }
}
