const expect = require("chai").expect;
const romanToInt = require("./index");

describe("Roman To Integer", function() {
  it("should return a number", function() {
    let string;
    string = "III";
    expect(romanToInt(string)).to.be.a("number");
  });

  it("should calculate larger numbers left of smaller ones", function() {
    let string;
    string = "VI";
    expect(romanToInt(string)).to.equal(6);

    string = "XI";
    expect(romanToInt(string)).to.equal(11);

    string = "CX";
    expect(romanToInt(string)).to.equal(110);
  });

  it("should calculate smaller numbers left of larger ones", function() {
    let string;
    string = "IV";
    expect(romanToInt(string)).to.equal(4);

    string = "IX";
    expect(romanToInt(string)).to.equal(9);

    string = "XC";
    expect(romanToInt(string)).to.equal(90);
  });

  it("should calculate a mix of individual numerals and combined numerals", function() {
    let string;
    string = "CIX";
    expect(romanToInt(string)).to.equal(109);

    string = "VLIII";
    expect(romanToInt(string)).to.equal(48);

    string = "MCMXCIV";
    expect(romanToInt(string)).to.equal(1994);
  });
});
