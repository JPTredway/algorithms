// Given a positive integer n, return its digits reversed.
// DO NOT CONVERT n INTO A STRING OR ARRAY.
// Only use integers and math in your solution.

const reverseInteger = n => {
  let place = 1;
  let curr = n;
  while (curr / place >= 10) {
    place *= 10;
  }

  let total = 0;
  let newPlace = 1;
  while (place >= 1) {
    const currDigit = Math.floor(curr / place);
    curr -= currDigit * place;
    total += currDigit * newPlace;
    newPlace *= 10;
    place /= 10;
  }

  return total;
};

module.exports = reverseInteger;
