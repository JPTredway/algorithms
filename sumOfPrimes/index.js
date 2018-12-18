// Given a positive number, return the sum of all positive primes that are less than or equal to that number.

// Solution utilizes closure to store all known primes
const getPrimes = (() => {
  const storage = [2, 3];

  return function(n) {
    if (storage[storage.length - 1] >= n) return storage;

    for (let i = storage[storage.length - 1]; i <= n; i += 2) {
      if (storage.every(prime => i % prime)) storage.push(i);
    }

    return storage;
  };
})();

const sumOfPrimes = n => {
  const allPrimes = getPrimes(n);

  let total = 0;
  for (let i = 0; i < allPrimes.length; i++) {
    if (allPrimes[i] > n) break;
    total += allPrimes[i];
  }

  return total;
};

module.exports = sumOfPrimes;
