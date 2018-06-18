/* eslint-disable prefer-destructuring */
import _ from 'lodash';
import { GRAPH_ADD_NODE, GRAPH_CLEAR_DATA } from './actions';

const initialState = {
  nodes: [
    {
      id: 'A 0',
      x: 200,
      y: 40,
      color: '#80b3ff'
    }
  ],
  links: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GRAPH_ADD_NODE: {
      let nodes = _.concat(state.nodes, action.payload.nodes);
      let links = _.concat(state.links, action.payload.link);
      nodes = _.uniqBy(nodes, 'id');
      links = _.uniqWith(links, _.isEqual);
      return { nodes, links };
    }
    case GRAPH_CLEAR_DATA: {
      return { ...initialState };
    }
    default:
      return state;
  }
}
