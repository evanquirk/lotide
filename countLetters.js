const countLetters = function(input) {
  const results = {};
  // for...of love
  for (const letter of input) {
    //not counting the space
    if (letter !== " ") {
      //if the letter key has already been added to result
      if (results[letter]) {
        results[letter] += 1;
      //if the letter key hasn't already been added to result
      } else {
        results[letter] = 1;
      }
    }
  } return results;
};

module.exports = countLetters;