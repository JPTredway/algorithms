const expect = require("chai").expect;
const pathsToWork = require("./index");

describe("Paths To Work", function() {
  it("should return a number", function() {
    expect(pathsToWork(1, 1)).to.be.a("number");
  });

  it("should handle solutions with one unique path", function() {
    expect(pathsToWork(0, 0)).to.equal(1);
    expect(pathsToWork(1, 0)).to.equal(1);
    expect(pathsToWork(0, 1)).to.equal(1);
  });

  it("should handle solutions with multiple unique paths", function() {
    expect(pathsToWork(2, 2)).to.equal(6);
    expect(pathsToWork(4, 4)).to.equal(70);
  });

  it("should handle medium-sized boards", function() {
    expect(pathsToWork(9, 15)).to.equal(1307504);
    expect(pathsToWork(12, 15)).to.equal(17383860);
  });
});
