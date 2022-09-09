// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
// const input = "Hello World";
let input = "3251131343 2543241341"
const polybiusModule = (function () {
  const lettersToNumbers = {
    'a': '11',
    'f': '12',
    'l': '13',
    'q': '14',
    'v': '15',
    'b': '21',
    'g': '22',
    'm': '23',
    'r': '24',
    'w': '25',
    'c': '31',
    'h': '32',
    'n': '33',
    's': '34',
    'x': '35',
    'd': '41',
    'i': '42',
    'j': '42',
    'o': '43',
    't': '44',
    'y': '45',
    'e': '51',
    'k': '52',
    'p': '53',
    'u': '54',
    'z': '55'
  }
  const numberToLetters = {
    11: 'a',
    12: 'f',
    13: 'l',
    14: 'q',
    15: 'v',
    21: 'b',
    22: 'g',
    23: 'm',
    24: 'r',
    25: 'w',
    31: 'c',
    32: 'h',
    33: 'n',
    34: 's',
    35: 'x',
    41: 'd',
    42: '(i/j)',
    43: 'o',
    44: 't',
    45: 'y',
    51: 'e',
    52: 'k',
    53: 'p',
    54: 'u',
    55: 'z',
  }
  function splitNumbers(input) {
    return input.match(/([0-9]){2}/g)
  }
// console.log(splitNumbers(input));
  /**
   * @param {*} input - refers to the inputted text to be encoded or decoded 
   * @param {*} encode - refers to whether one should encode or decode the message. By default, it's set to true.
   * @returns either an encoded or decoded message
   */
  function polybius(input, encode = true) {
    let secretMessage = "";
    //if encoding is true
    if (encode) {
      const inputArray = input.toLowerCase().split("");
      inputArray.forEach(character => {
        if(!lettersToNumbers[character]) {
          secretMessage += character;
        } else {
          secretMessage += lettersToNumbers[character];
        }
      });
    } else {
      const testInput = input.split(" ");
      if(testInput.join("").length % 2 != 0) { // checks to see if the input.length is odd
        return false;
      } else {
        let decodedMessage = [];
        for(let number of testInput) {
          let testArray = [];
          const result = splitNumbers(number);
          result.forEach(letterNumber => {
            testArray.push(numberToLetters[letterNumber]);
            })
            decodedMessage.push(testArray.join(""))
          }
          secretMessage = decodedMessage.join(" ");
      }
    }
    
    return secretMessage;
  }
  return {
    polybius,
  };
})();


/**
 * The Polybius square is a cipher that is achieved by arranging a typical alphabet into a grid. 
 * Each letter is represented through a coordinate. For example, in the above table, the letter B 
 * would be represented by the numerical pair 21. Typically, it is possible to arrange the letters 
 * however you like and read off the coordinates in whatever direction you like. In this example, 
 * the grid will be arranged as above and coordinates will be read by comparing the first digit to the 
 * number on the top of the table and the second digit to that on the left.
 */


module.exports = { polybius: polybiusModule.polybius };
