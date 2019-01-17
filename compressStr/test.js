const expect = require("chai").expect;
const compressStr = require("./index");

describe("Compress String", function() {
  it(`should correctly "compress" a given string`, function() {
    expect(compressStr("abbaaaaac")).to.equal("a1b2a5c1");
    expect(compressStr("aaaaa")).to.equal("a5");
    expect(compressStr("abytttttt")).to.equal("a1b1y1t6");
  });

  it(`should return the original string if the "compressed" version isn't any smaller`, function() {
    expect(compressStr("abba")).to.equal("abba");
    expect(compressStr("a")).to.equal("a");
    expect(compressStr("aa")).to.equal("aa");
    expect(compressStr("abb")).to.equal("abb");
  });
});
