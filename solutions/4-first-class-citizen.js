const run = (input) => {
  const getLastReversed = (str, count) => {
    if (str.length === 0 || str.length < count) return null;
    const segment = str.slice(-count);
    return segment.split('').reverse().join('');
  };

  return getLastReversed(input, 4);
};

export default run;