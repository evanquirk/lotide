const eqArrays = require('./eqArrays');

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
  
module.exports = eqObjects;