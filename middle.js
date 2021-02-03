const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🚨🚨🚨Assertion Failed: ${array1} !== ${array2}`);
  }
};

const middle = function(array) {

  const results = [];
  // For arrays with one or two elements, there is no middle. Return an empty array.
  if (array.length <= 2) {
    return results;
  } else {
    // find middle of array by dividing by 2. Use Math.ceil to round to next largest integer.
    let middleIndex = Math.ceil(array.length / 2) - 1;
    console.log(middleIndex);
    //rounds the middle array down. -1 to account for 0 index
    if (array.length % 2 !== 0) {
      //if array is and odd length, middle is clearly defined.
      results.push(array[middleIndex]);
    } else {
      //array is even length, push round down, and next index
      results.push(array[middleIndex]);
      results.push(array[middleIndex + 1]);
    }
    return results;
  }
};

console.log(middle([1, 2, 4, 6, 9, 10]));