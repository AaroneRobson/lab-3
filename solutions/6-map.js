const getChildren = (people) => {
  const childrenList = people.map(person => person.children);
  return childrenList.flat();
};

export default getChildren;