const expect = require("chai").expect;
const volumes = require("./index");

describe("Water Volumes", function() {
  it("should return a number", function() {
    expect(volumes([3, 0, 3])).to.be.a("number");
  });

  it("should not collect water from margins", function() {
    expect(volumes([1, 2, 3, 4, 5])).to.equal(0);
    expect(volumes([5, 4, 3, 2, 1])).to.equal(0);
  });

  it("should correctly calculate the total water collected", function() {
    expect(volumes([3, 0, 3])).to.equal(3);
    expect(volumes([3, 0, 3, 4, 5, 0, 5])).to.equal(8);
    expect(volumes([4, 3, 0, 3, 4])).to.equal(6);
    expect(volumes([1, 2, 3, 4, 0, 5, 3, 1])).to.equal(4);
  });
});
