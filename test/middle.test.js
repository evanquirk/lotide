const { assert } = require('chai');
const { middle } = require('../index');

describe('#middle', () => {
  it("returns '4, 6' from an array of [1, 2, 4, 6, 9, 10]", () => {
    assert.deepEqual(middle([1, 2, 4, 6, 9, 10]), [ 4, 6]);
  });
});
