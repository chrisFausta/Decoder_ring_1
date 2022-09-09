const { expect } = require("chai")
const { substitution } = require("../src/substitution")

describe("substitution()", () => {
    it("should return false if the given alphabet isn't exactly 26 characters long", () => {
        const actual = substitution("thinkful", "short");
        expect(actual).to.be.false;
    })
    it("should returns false if there are any duplicate characters in the given alphabet.", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.be.false;
    })
    it("should correctly translates the given phrase, based on the alphabet given to the function.", () => {
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        expect(actual).to.equal('y&ii$r&')
    })
    it("should maintains spaces in the message, before and after encoding or decoding.", () => {
        const actualOne = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actualOne).to.equal('elp xhm xf mbymwwmfj dne');
        const actualTwo = substitution('elp xhm xf mbymwwmfj dne', "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actualTwo).to.equal("you are an excellent spy");
     
    })
    it("should ignores capital letters.", () => {
        const actualOne = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        const actualTwo = substitution("THINKFUL", "xoyqmcgrukswaflnthdjpzibev");
        expect(actualOne, actualTwo).to.equal('jrufscpw')
    })
})
