const getRandomValue = () => Math.floor(Math.random() * 51) + 50;

const createGraphNode = (nodeDescription) => {
  return {
    id: nodeDescription,
    x: nodeDescription === 'A 0' ? 200 : 100,
    y: nodeDescription === 'A 0' ? 40 : 120,
    color: nodeDescription === 'A 0' ? '#80b3ff' : '#ff9999'
  };
};
const createGraphLink = (source, target) => ({ source, target });


export const createAction = type => (req, args) => ({ type, payload: req, args });

export {
  getRandomValue,
  createGraphNode,
  createGraphLink
};
