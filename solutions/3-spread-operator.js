const convert = (...items) => {
  return items.map(item => {
    const [y, m, d] = item;
    const date = new Date(y, m, d);
    return date.toDateString();
  });
};

export default convert;