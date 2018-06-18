import { GRAPH_ADD_NODE, GRAPH_CLEAR_DATA } from './actions';

const initialState = {
  nodes: [],
  links: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GRAPH_ADD_NODE: {
      const nodes = state.nodes.concat(action.payload.nodes);
      const links = state.links.concat(action.payload.link);
      return { nodes, links };
    }
    case GRAPH_CLEAR_DATA: {
      return { ...initialState };
    }
    default: return state;
  }
}
