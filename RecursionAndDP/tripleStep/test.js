const expect = require("chai").expect;
const { tripleStep, tripleStepDP } = require("./index");

describe(`Find all uniques ways someone can run up a staircase, taking 1, 2, or 3 steps at a time`, function() {
  it("should find all unique ways using recursion", function() {
    expect(tripleStep(0)).to.equal(1);
    expect(tripleStep(1)).to.equal(1);
    expect(tripleStep(2)).to.equal(2);
    expect(tripleStep(3)).to.equal(4);
    expect(tripleStep(4)).to.equal(7);
    expect(tripleStep(5)).to.equal(13);
    expect(tripleStep(20)).to.equal(121415);
  });

  it("should find all unique ways using DP", function() {
    expect(tripleStepDP(0)).to.equal(1);
    expect(tripleStepDP(1)).to.equal(1);
    expect(tripleStepDP(2)).to.equal(2);
    expect(tripleStepDP(3)).to.equal(4);
    expect(tripleStepDP(4)).to.equal(7);
    expect(tripleStepDP(5)).to.equal(13);
  });

  it("should find handle much larger inputs using DP", function() {
    expect(tripleStepDP(20)).to.equal(121415);
    expect(tripleStepDP(30)).to.equal(53798080);
    expect(tripleStepDP(40)).to.equal(23837527729);
    expect(tripleStepDP(50)).to.equal(10562230626642);
  });
});
