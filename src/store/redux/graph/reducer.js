import { GRAPH_ADD_NODE } from './actions';

const initState = {
  nodes: [],
  links: []
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case GRAPH_ADD_NODE: {
      const nodes = state.nodes.concat(action.payload.nodes);
      const links = state.links.concat(action.payload.link);
      return { nodes, links };
    }
    default:
      return state;
  }
}
