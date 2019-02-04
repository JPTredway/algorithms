const expect = require("chai").expect;
const { addTwoNums } = require("./index");

describe("Add Two Numbers", function() {
  it("should add a number to zero", function() {
    expect(addTwoNums(12, 0)).to.equal(12);
    expect(addTwoNums(0, 12)).to.equal(12);
    expect(addTwoNums(0, 0)).to.equal(0);
  });

  it("should add positive numbers", function() {
    expect(addTwoNums(12, 12)).to.equal(24);
    expect(addTwoNums(100, 12)).to.equal(112);
    expect(addTwoNums(45, 42)).to.equal(87);
  });

  it("should add negative numbers", function() {
    expect(addTwoNums(-12, -12)).to.equal(-24);
    expect(addTwoNums(-100, -12)).to.equal(-112);
    expect(addTwoNums(-45, -45)).to.equal(-90);
  });

  it("should add any two numbers", function() {
    expect(addTwoNums(100, -12)).to.equal(88);
    expect(addTwoNums(100001, 10)).to.equal(100011);
    expect(addTwoNums(-45, 45)).to.equal(0);
  });
});
