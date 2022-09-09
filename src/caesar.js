// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r',
  's','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
  'q','r','s','t','u','v','w','x','y','z'];


  /**
   * @param {*} input - refers to the inputted text to be encoded or decoded
   * @param {*} shift - refers to how much each letter is "shifted" by. 
   * A positive number means shifting to the right (i.e., A becomes D) 
   * whereas a negative number means shifting to the left (i.e., M becomes K).
   * @param {*} encode -  refers to whether you should encode or decode the message. By default it is set to true.
   * @returns a message that has either been decoded or encoded, or returns false if the shift value isn't present, 
   * equal to 0, less than -25, or greater than 25,
   */
  function caesar(input, shift, encode = true) {
    if(shift < -25 || shift === 0 || shift > 25 || !shift || !input) return false;
    const inputArray = input.toLowerCase().split("");
    let secretMessage = "";
    inputArray.forEach(letter => {
      if(!alphabetArray.includes(letter)) {
         secretMessage += letter;
      } else {
        let index = alphabetArray.indexOf(letter); 
        if(encode) {
          let result = index + shift;
          if(result < 0) result = alphabetArray.length + (index + shift);
          secretMessage += alphabetArray[result];
        } else {
          let result = index - shift;
          if(result < 0) result = alphabetArray.length + (index - shift);
          secretMessage += alphabetArray[result];
        }
      }
    });
    return secretMessage;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
