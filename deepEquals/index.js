// Write a function that, given two objects, returns whether or not
// the two are deeply equivalent–meaning the structure of the two
// objects is the same, and so is the structure of each of their
// corresponding descendants.

// DO NOT use JSON.stringify.
const compareArrays = (a, b, areKeys = false) => {
  if (a.length !== b.length) return false;
  if (areKeys) {
    a = a.sort();
    b = b.sort();
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
};

const deepEquals = (a, b) => {
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (!compareArrays(aKeys, bKeys, true)) return false;

  for (let key of aKeys) {
    if (Array.isArray(a[key]) && !compareArrays(a[key], b[key])) {
      return false;
    } else if (
      a[key] &&
      b[key] &&
      typeof a[key] === "object" &&
      typeof b[key] === "object"
    ) {
      if (!deepEquals(a[key], b[key])) return false;
    } else if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
};

module.exports = deepEquals;
