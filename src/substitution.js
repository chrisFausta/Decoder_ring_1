// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  function repeatedCharacters(input) {
    const inputArray = input.split("");
    inputArray.sort();
    for(let i = 0; i < inputArray.length; i++) {
      if(inputArray[i] === inputArray[i + 1]) {
        return true;
      } 
      else {
        return false
      }
    }
  }
/**
 * The substitution cipher requires a standard alphabet and a substitution alphabet. 
 * Letters from the standard alphabet will be transposed to the standard alphabet. 
 * This cipher requires that the recipient have the substitution alphabet, otherwise 
 * it will be difficult for them to decode the message.
 * @param {*} input -  refers to the inputted text to be encoded or decoded.
 * @param {*} alphabet - refers to substitution alphabet.
 * @param {*} encode - refers to whether you should encode or decode the message. By default it is set to true.
 * @returns either an encoded or decoded message
 */
  function substitution(input, alphabet, encode = true) {
    if(!alphabet || alphabet.length !== 26 || repeatedCharacters(alphabet)) return false;
    const inputArray =  input.toLowerCase().split("");
    let secretMessage = "";
    if(encode) {
      inputArray.forEach(letter => {
        if(!alphabetArray.includes(letter)) {
          secretMessage += letter;
        } else {
          let index = alphabetArray.indexOf(letter);
          secretMessage += alphabet[index];
        }
      })
    }
    else {
      const substitutionArray = alphabet.split("");
      inputArray.forEach(character => {
        if(!substitutionArray.includes(character)) {
          secretMessage += character;
        }
        else {
          let index = substitutionArray.indexOf(character);
          secretMessage += alphabetArray[index];
        }
      })
    }
    return secretMessage;
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
