/*
Write a method to return all subsets of a set.
*/

const powerSet = set => {
  if (!set) return set;

  const subs = [""];
  set.forEach(el => {
    subs.forEach(sub => {
      subs.push(sub + el);
    });
  });

  return subs.slice(1);
};

module.exports = { powerSet };
