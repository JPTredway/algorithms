const expect = require("chai").expect;
const { magicIndex } = require("./index");

describe(`Find a "magic index" in a sorted array`, function() {
  it(`should find a magic index if one exists`, function() {
    let arr = [-2, 1, 3, 5, 6];
    expect(magicIndex(arr)).to.equal(1);

    arr = [-2, 0, 1, 3, 6];
    expect(magicIndex(arr)).to.equal(3);

    arr = [0, 2, 3, 6];
    expect(magicIndex(arr)).to.equal(0);

    arr = [-2, 0, 1, 2, 4];
    expect(magicIndex(arr)).to.equal(4);
  });

  it(`should return -1 if a magic index if one doesn't exist`, function() {
    let arr = [-2, 0, 3, 5, 6];
    expect(magicIndex(arr)).to.equal(-1);

    arr = [];
    expect(magicIndex(arr)).to.equal(-1);

    arr = [1, 2, 3, 6, 20];
    expect(magicIndex(arr)).to.equal(-1);
  });
});
