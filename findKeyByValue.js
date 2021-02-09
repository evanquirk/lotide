const findKeyByValue  = function(object,value) {
  //implement the function findKeyByValue which takes in an object and a value.
  for (const key in object) {
    //it should scan the object
    if (object[key] === value) {
      //and should return the first key which contains the given value.
      return key;
    }
  } // if no key is found, it should return undefined
};

module.exports = findKeyByValue;