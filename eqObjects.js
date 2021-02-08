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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
//returns true if objects have identical keys and values

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
}
  
// test code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false