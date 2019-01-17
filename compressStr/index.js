const compressStr = str => {
  if (!str || str.length < 2) return str;
  let output = "";
  let currChar = str[0],
    currCount = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === currChar) {
      currCount++;
    } else {
      output += currChar + currCount;
      currChar = str[i];
      currCount = 1;
    }
  }
  output += currChar + currCount;
  return output.length < str.length ? output : str;
};

module.exports = compressStr;
