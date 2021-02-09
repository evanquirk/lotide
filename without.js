const without = function(source, itemsToRemove) {
  const results = [];
  // loop through source array:
  for (const item of source) {
    // check if item in source isn't in itemsToRemove:
    if (!itemsToRemove.includes(item)) {
      // add this item to results array:
      results.push(item);
    }
  }
  return results;
};

module.exports = without;
