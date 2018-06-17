import Immutable from 'seamless-immutable';
import { APPLICATION_INIT_START } from './actions';


const initState = Immutable.from({
  initialized: false
});

export default function reducer(state = initState, action) {
  switch (action.type) {
    case APPLICATION_INIT_START: return state
      .set('initialized', action.payload);
    default: return state;
  }
}
