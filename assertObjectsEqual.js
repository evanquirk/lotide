const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(array1,array2) {
  //function is passed 2 argumenets - array 1 and array 2
  if (array1.length !== array2.length) {
    // if the lengths do not match, return false
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    //loop through the first array
    if (array1[i] !== array2[i]) {
      // if the element in array 1 does not match the same element in array 2, return false
      return false;
    }
  }
  return true;
  // if everything matches, return true
};
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
    // they are not the same length, so automatic fail/stop
  } else {
    for (let i in object1) {
      if ((Array.isArray(object1[i]) && Array.isArray(object2[i]))) {
        // if the keys in the object key arrays match
        if (eqArrays(object1[i], object2[i]) === false) {
          return false
          // run through eqArrays to bypass === issue
        }
      } else {
        if (object1[i] !== object2[i]) {
          return false;
        }
      }
    }
    return true;
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  console.log(inspect(actual))
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🚨🚨🚨Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }  
};

  
// test code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertObjectsEqual(ab, ba)