const takeOldest = (people, amount = 1) => {
  const sorted = [...people].sort((x, y) => {
    const timeX = Date.parse(x.birthday);
    const timeY = Date.parse(y.birthday);
    return timeX - timeY;
  });
  return sorted.slice(0, amount);
};

export default takeOldest;