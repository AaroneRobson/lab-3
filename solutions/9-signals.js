import _ from 'lodash';

const freeDomains = ['gmail.com', 'yandex.ru', 'hotmail.com', 'yahoo.com'];

const getFreeDomainsCount = (emailList) => {
  const stats = {};
  
  emailList.forEach(email => {
    const domain = email.split('@')[1];
    if (freeDomains.includes(domain)) {
      stats[domain] = (stats[domain] || 0) + 1;
    }
  });
  
  return stats;
};

export default getFreeDomainsCount;