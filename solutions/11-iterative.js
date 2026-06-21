const smallestDivisor = (number) => {
  if (number === 1) return 1;
  
  const findDivisor = (current) => {
    if (current > Math.sqrt(number)) return number;
    if (number % current === 0) return current;
    return findDivisor(current + 1);
  };
  
  return findDivisor(2);
};

export default smallestDivisor;