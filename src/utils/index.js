const getRandomValue = () => Math.floor(Math.random() * 51) + 50;

const defaultNode = {
  id: 'A 0',
  x: 200,
  y: 40,
  color: '#80b3ff'
};

const getNodeData = (nodeIndex) => {
  switch (nodeIndex) {
    case 'A 0':
      return { ...defaultNode };
    case 'B 1':
      return {
        id: nodeIndex,
        x: 100,
        y: 120,
        color: '#8cd9b3'
      };
    case 'C 1':
      return {
        id: nodeIndex,
        x: 100,
        y: 120,
        color: '#db5e5e'
      };
    default:
      return defaultNode;
  }
};

const createGraphNode = (nodeIndex) => {
  const nodeData = getNodeData(nodeIndex);
  return {
    ...nodeData
  };
};

const createGraphLink = (source, target) => ({ source, target });


export const createAction = type => (req, args) => ({ type, payload: req, args });

export {
  getRandomValue,
  createGraphNode,
  createGraphLink
};
