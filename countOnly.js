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

module.exports = countOnly;