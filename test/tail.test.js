const { assert } = require('chai');
const { tail }  = require('../index');

describe('#tail', () => {
  it("returns 'lighthouse', 'labs' for ['hello', 'lighthouse', 'labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  })
});
