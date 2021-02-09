const takeUntil = function(array, callback) {
  let results = [];
  for (let element of array) {
    if (!callback(element)) {
      results.push(element);
    } else {
      break;
    }
  }
  return results;
};

module.exports = takeUntil;