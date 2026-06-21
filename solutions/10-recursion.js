const sequenceSum = (start, finish) => {
  if (start > finish) return NaN;
  if (start === finish) return start;
  return start + sequenceSum(start + 1, finish);
};

export default sequenceSum;