const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨Assertion Failed: ${actual} !== ${expected}`);
  }
};
//Assert Equal Function (to be added globally later)
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

