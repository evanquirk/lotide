//copied in assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨Assertion Failed: ${actual} !== ${expected}`);
  }
};

//countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  // declare object literal for results
  
  for (let item of allItems) {
    // loop through items in allItems array
    if (itemsToCount[item]) {
      //if items to count contains that item, continue
      if (results[item]) {
        //if our results object already contain that item, then...
        results[item] += 1;
        // add 1 more value to that item.
        } else {
          // if it's a new item in our results...
          results[item] = 1;
          // our item is equal to 1
        }
      }
    }
  return results;
};


//TEST CODE:
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);