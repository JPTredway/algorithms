const expect = require("chai").expect;
const sumOfPrimes = require("./index");

describe("Sum of Primes", function() {
  it("should return a number", function() {
    expect(sumOfPrimes(5)).to.be.a("number");
  });

  it("should correctly add all primes <= the given number", function() {
    expect(sumOfPrimes(5)).to.equal(10);
    expect(sumOfPrimes(10)).to.equal(17);
    expect(sumOfPrimes(20)).to.equal(77);
  });

  it("should handle numbers less than 2", function() {
    expect(sumOfPrimes(1)).to.equal(0);
    expect(sumOfPrimes(0)).to.equal(0);
    expect(sumOfPrimes(-1)).to.equal(0);
  });

  it("should handle large numbers", function() {
    expect(sumOfPrimes(1000)).to.equal(76127);
    expect(sumOfPrimes(10000)).to.equal(5736396);
    expect(sumOfPrimes(100000)).to.equal(454396537);
  });
});
