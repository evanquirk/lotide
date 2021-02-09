const tail = function(array) {
  let results = [];
  for (let i = 1; i < array.length; i ++) {
    results.push(array[i]);
  }
  return results;
};

module.exports = tail;