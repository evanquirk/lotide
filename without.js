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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const without = function(source, toRemove) {

//   const results = [];
  
//   for (let i = 0; i < source.length; i ++) {
//     for (let j = 0; j < toRemove.length; j++) {
//       if (source[i] !== toRemove[j]) {
//         results.push(source[i]);
//       }
//     }
//   }
//   return results
// };

const without = function(source, itemsToRemove) {
  const results = [];
  // loop through source array:
  for (const item of source) {
    // check if item in source isn't in itemsToRemove:
    if (!itemsToRemove.includes(item)) {
      // add this item to results array:
      results.push(item)
    }
  }
  return results
};
console.log(typeof without([], []));
// GIO'S TEST CASES //
assertArraysEqual(
  without([1, 2, 3, 3, 3, 4, 'dog', 'dog', '1', '2', '3', '4', 'cat', 1, 2, 5, 6], [3, 'dog', '3', 5]),
  [1, 2, 4, '1', '2','4', 'cat', 1, 2, 6]
);
assertArraysEqual(
  without(['a', 'b', 1, 2], []),
  ['a', 'b', 1, 2]
);
assertArraysEqual(
  without([], ['a']),
  []
);
assertArraysEqual(
  without(['a', 'a', 'a', 'a'], ['a']),
  []
);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// // console.log(words);