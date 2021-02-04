const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue  = function(object,value) {
  //implement the function findKeyByValue which takes in an object and a value.
  for (const key in object) {
    //it should scan the object
    if (object[key] === value) {
      //and should return the first key which contains the given value.
      return key;
    }
  } // if no key is found, it should return undefined
};

//TEST CASES
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);