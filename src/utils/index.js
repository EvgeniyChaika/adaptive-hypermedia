import objectBasic from '../consts';

const checkResultObjectBasic = value => objectBasic[value];
const getRandomValue = () => Math.floor(Math.random() * 51) + 50;

export const createAction = type => (req, args) => ({ type, payload: req, args });

export {
  checkResultObjectBasic,
  getRandomValue
};
