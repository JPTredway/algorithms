const expect = require("chai").expect;
const reverseInteger = require("./index");

describe("Integer Reverse", function() {
  it("should return a number", function() {
    expect(reverseInteger(12)).to.be.a("number");
  });

  it("should palindromic numbers", function() {
    expect(reverseInteger(101)).to.equal(101);
    expect(reverseInteger(1234554321)).to.equal(1234554321);
    expect(reverseInteger(1111111)).to.equal(1111111);
  });

  it("should reverse integers", function() {
    expect(reverseInteger(3490)).to.equal(0943);
    expect(reverseInteger(98127391283)).to.equal(38219372189);
  });
});
