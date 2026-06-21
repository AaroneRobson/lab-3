const groupBy = (items, property) => {
  return items.reduce((groups, item) => {
    const value = item[property];
    if (!groups[value]) {
      groups[value] = [];
    }
    groups[value].push(item);
    return groups;
  }, {});
};

export default groupBy;