import { createAction } from '../../../utils/index';

const GRAPH_ADD_NODE = 'user/GRAPH_ADD_NODE';
const GRAPH_CLEAR_DATA = 'user/GRAPH_CLEAR_DATA';

const graphActions = {
  graphAddNode: createAction(GRAPH_ADD_NODE),
  graphClearData: createAction(GRAPH_CLEAR_DATA)
};

export default graphActions;

export {
  GRAPH_ADD_NODE,
  GRAPH_CLEAR_DATA
};
