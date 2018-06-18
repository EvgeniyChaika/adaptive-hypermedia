import { createAction } from '../../../utils/index';

const GRAPH_ADD_NODE = 'user/GRAPH_ADD_NODE';

const graphActions = {
  graphAddNode: createAction(GRAPH_ADD_NODE)
};

export default graphActions;

export {
  GRAPH_ADD_NODE
};
