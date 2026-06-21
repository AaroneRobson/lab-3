import _ from 'lodash';

const average = (...values) => {
  if (values.length === 0) return null;
  return _.sum(values) / values.length;
};

export default average;