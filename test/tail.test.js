const assert = require('chai').assert;
const tail  = require('../tail');

describe('#tail', () => {
  it("returns 'lighthouse', 'labs' for ['hello', 'lighthouse', 'labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  })
});
