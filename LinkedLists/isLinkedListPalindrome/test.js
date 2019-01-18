const expect = require("chai").expect;
const LinkedList = require("../LinkedList");
const isLLPaindrome = require("./index");

describe("Check if a given Linked List is a palindrome", function() {
  it("should return true if the linked list is a palindrome", function() {
    let List1 = new LinkedList("a");
    List1.addToTail("b");
    List1.addToTail("b");
    List1.addToTail("a");
    expect(isLLPaindrome(List1.head)).to.equal(true);

    List1 = new LinkedList("a");
    List1.addToTail("b");
    List1.addToTail("a");
    expect(isLLPaindrome(List1.head)).to.equal(true);

    List1 = new LinkedList("a");
    expect(isLLPaindrome(List1.head)).to.equal(true);
  });

  it("should return false if the linked list is not a palindrome", function() {
    let List1 = new LinkedList("a");
    List1.addToTail("b");
    List1.addToTail("c");
    List1.addToTail("a");
    expect(isLLPaindrome(List1.head)).to.equal(false);

    List1 = new LinkedList("a");
    List1.addToTail("b");
    List1.addToTail("b");
    expect(isLLPaindrome(List1.head)).to.equal(false);

    expect(isLLPaindrome()).to.equal(false);
  });
});
