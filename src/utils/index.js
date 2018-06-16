import objectBasic from '../consts';

const checkResultObjectBasic = value => objectBasic[value];

export const createAction = type => (req, args) => ({ type, payload: req, args });

export {
  checkResultObjectBasic
};
