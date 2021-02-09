const findKey = function(object, callback) {
  const keys = Object.keys(object);
  for (let keyValues of keys) {
    if (callback(object[keyValues])) {
      return keyValues;
    }
  }
};
module.exports = findKey;