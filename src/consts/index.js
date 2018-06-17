const userRules = {
  D: '0 <= p1 < 80 : D',
  E: '80 <= p1 < 100 : E'
};

const graphConfig = {
  height: 800,
  width: 440,
  nodeHighlightBehavior: true,
  staticGraph: true,
  node: {
    color: 'white',
    size: 800,
    fontSize: 20,
    fontColor: 'brown'
  },
  link: {
    highlightColor: 'lightblue'
  }
};
const graphData = {
  nodes: [
    {
      id: 'A 0',
      x: 200,
      y: 40,
      color: '#80b3ff'
    },
    {
      id: 'C 1',
      x: 100,
      y: 120,
      color: '#ff9999'
    },
    {
      id: 'B 2',
      x: 200,
      y: 120,
      color: '#8cd9b3'
    },
    {
      id: 'C 3',
      x: 300,
      y: 120,
      color: '#ff9999'
    },
    {
      id: 'A 4',
      x: 200,
      y: 200,
      color: '#80b3ff'
    },
    {
      id: 'B 5',
      x: 100,
      y: 280,
      color: '#8cd9b3'
    },
    {
      id: 'C 6',
      x: 300,
      y: 280,
      color: '#ff9999'
    },
    {
      id: 'D 7',
      x: 50,
      y: 360,
      color: '#d6d6c2'
    },
    {
      id: 'E 8',
      x: 150,
      y: 360,
      color: '#ffb366'
    },
    {
      id: 'D 9',
      x: 250,
      y: 360,
      color: '#d6d6c2'
    },
    {
      id: 'D 10',
      x: 350,
      y: 360,
      color: '#d6d6c2'
    }
  ],
  links: [
    {
      source: 'A 0',
      target: 'C 1'
    },
    {
      source: 'A 0',
      target: 'B 2'
    },
    {
      source: 'A 0',
      target: 'C 3'
    },
    {
      source: 'C 1',
      target: 'A 4'
    },
    {
      source: 'B 2',
      target: 'A 4'
    },
    {
      source: 'C 3',
      target: 'A 4'
    },
    {
      source: 'A 4',
      target: 'B 5'
    },
    {
      source: 'A 4',
      target: 'C 6'
    },
    {
      source: 'B 5',
      target: 'D 7'
    },
    {
      source: 'B 5',
      target: 'E 8'
    },
    {
      source: 'C 6',
      target: 'D 9'
    },
    {
      source: 'C 6',
      target: 'D 10'
    }
  ]
};

export {
  userRules,
  graphConfig,
  graphData
};
