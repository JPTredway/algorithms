// A child is running up a staircase with n steps and
// can hop either 1 step, 2 steps, or 3 steps at a time.
// Implement a method to count how many possible ways
// the child can run up the stairs.

// Recursive ~O(3^n) Time & Space Complexity
const tripleStep = n => {
  if (n === 0) return 1;
  if (n < 0) return 0;

  return tripleStep(n - 1) + tripleStep(n - 2) + tripleStep(n - 3);
};

// DP O(n) Time & Space Complexity
const tripleStepDP = n => {
  if (n < 2) return 1;
  const lastThree = [1, 1, 2];

  for (let i = 3; i <= n; i++) {
    const last = lastThree[0] + lastThree[1] + lastThree[2];
    // prettier-ignore
    [lastThree[0], lastThree[1], lastThree[2]] = [lastThree[1], lastThree[2], last];
  }

  return lastThree[2];
};

module.exports = { tripleStep, tripleStepDP };
