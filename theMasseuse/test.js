const expect = require("chai").expect;
const { highestNumOfMins } = require("./index");

describe("The Masseuse", function() {
  it("should always return a number", function() {
    expect(highestNumOfMins([15, 30])).to.be.a("number");
    expect(highestNumOfMins([])).to.be.a("number");
    expect(highestNumOfMins()).to.be.a("number");
  });

  it("should return the highest possible amount", function() {
    expect(highestNumOfMins([15, 30])).to.equal(30);
    expect(highestNumOfMins([15, 30, 45])).to.equal(60);
    expect(highestNumOfMins([30, 15, 60, 75, 45, 15, 15, 45])).to.equal(180);
    expect(highestNumOfMins([15, 15, 15, 15, 15, 15, 225, 15])).to.equal(270);
  });

  it("should work with large arrays", function() {
    let arr = [];
    for (let i = 0; i < 100000; i++) arr.push(15);
    arr[90] = 900;
    expect(highestNumOfMins(arr)).to.equal(750885);

    for (let i = 0; i < 100000; i++) arr.push(15);
    arr[18000] = 900;
    expect(highestNumOfMins(arr)).to.equal(1501770);

    for (let i = 0; i < 100000; i++) arr.push(15);
    arr[20000] = 900;
    expect(highestNumOfMins(arr)).to.equal(2252655);
  });
});
