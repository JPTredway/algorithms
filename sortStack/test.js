const expect = require("chai").expect;
const { sortStack } = require("./index");

describe("Sort a stack using only one additional stack", function() {
  it("should move smallest elements to the top (back)", function() {
    expect(sortStack([1, 10, 20, -1])).to.deep.equal([20, 10, 1, -1]);
    expect(sortStack([1, -10, 20, -1])).to.deep.equal([20, 1, -1, -10]);
  });

  it("should handle duplicate elements", function() {
    expect(sortStack([1, 10, 20, -1, -1])).to.deep.equal([20, 10, 1, -1, -1]);
    expect(sortStack([5, 5, 5, 5, 10])).to.deep.equal([10, 5, 5, 5, 5]);
  });

  it("should mutate the original stack", function() {
    let stack = [1, 10, 20, -1, -1];
    sortStack(stack);
    expect(stack).to.deep.equal([20, 10, 1, -1, -1]);

    stack = [5, 5, 5, 5, 10];
    sortStack(stack);
    expect(stack).to.deep.equal([10, 5, 5, 5, 5]);
  });
});
