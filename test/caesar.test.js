// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar")




describe("caesar()", () => {
    it("should return false if the shift value is equal to 0, less than -25, greater than 25, or not present.", () => {
        const actualOne = caesar("thinkful", 99);
        const actualTwo = caesar("thinkful", -51);
        const actualThree = caesar("thinkful", 0);
        const actualFour = caesar("thinkful");
        expect(actualOne, actualTwo, actualThree, actualFour).to.be.false;
        // expect(actualTwo).to.be.false;
        // expect(actualThree).to.be.false;
        // expect(actualFour).to.be.false;
    })
    it("should ignore capital letters", () => {
        const actual = caesar("WkLqnixo", 3, false);
        expect(actual).to.equal("thinkful");
    })
    it("should handle shifts that go past the end of the alphabet", () => {
        const actual = caesar("cheud", 3, false);
        expect(actual).to.equal("zebra");
    })
    it("should maintain spaces and other nonalphabetic symbols in the message, before and after the encoding or decoding", () => {
        const actual = caesar("Zebra Magazine!", 3);
        expect(actual).to.equal("cheud pdjdclqh!");
    })
})

