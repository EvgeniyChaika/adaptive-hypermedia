import Immutable from 'seamless-immutable';
import { USER_SET_INITIAL_STATE } from './actions';


const initState = Immutable.from({
  overallLevel: 0
});

export default function reducer(state = initState, action) {
  switch (action.type) {
    case USER_SET_INITIAL_STATE: return state
      .set('overallLevel', action.payload);
    default: return state;
  }
}
