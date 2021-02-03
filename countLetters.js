//copy in assterEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(input) {

  const result = {};
  //for of loop 
  for (const letter of input) {
    //not counting the space
    if (letter !== " ") {
      //if the letter key has already been added to result
      if (result[letter]) {
        result[letter] += 1;
      //if the letter key hasn't already been added to result
      } else {
        result[letter] = 1;
      }
    }
  } return result;
};
