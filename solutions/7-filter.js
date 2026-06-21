const getGirlFriends = (people) => {
  const allFriends = people.flatMap(person => person.friends);
  return allFriends.filter(friend => friend.gender === 'female');
};

export default getGirlFriends;