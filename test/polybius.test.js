const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
    it("should translate the letters i & j to 42 when encoding.", () => {
        const actual = polybius("i");
        const actualTwo = polybius("j");
        expect(actual, actualTwo).to.equal("42");
    })
    it("should translate 42 to (i/j).", () => {
        const actual = polybius("42", false);
        expect(actual).to.equal("(i/j)");
    })
    it("should ignore capital letters.",() => {
        const actual = polybius("A Message");
        const expected = polybius("a message")
        expect(actual).to.equal(expected);
    })
    it("should return false if the number of characters in the string, excluding spaces, is not even while decoding.", () => {
        const actual = polybius("44324233521254134", false);
        expect(actual).to.be.false;
    })
    it("should return a string, while encoding.", () => {
        const  actual = polybius("thinkful");
        expect(actual).to.have.string("4432423352125413")
    })
    it("should maintain spaces in the message, before and after encoding or decoding.", () => {
        const actual = polybius("3251131343 2543241341", false);
        const actualTwo = polybius("Hello World");
        expect(actual).to.equal("hello world");
        expect(actualTwo).to.equal("3251131343 2543241341")
    })
})