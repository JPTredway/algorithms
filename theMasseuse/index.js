/*
  A populare masseuse receives a sequence of back-to-back 
  appointment requests and is debating which ones to accept. She 
  needs a 15-minute break between appointments and therefore 
  cannot accept any adjacent requests.

  Given a sequence of back-to-back appointment requests (all 
  multiples of 15 minutes, none overlap, and none can be moved), 
  find the optimal (highest total booked minutes) set the masseuse 
  can honor. Return the number of minutes.
*/

const highestNumOfMins = arr => {
  if (!arr || !arr.length) return 0;
  if (arr.length < 3) return Math.max(...arr);
  const highest = [...arr];

  for (let i = 2; i < highest.length; i++) {
    highest[i] = Math.max(highest[i] + highest[i - 2], highest[i - 1] || 0);
  }

  return highest[highest.length - 1];
};

module.exports = { highestNumOfMins };
