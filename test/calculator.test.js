const assert = require('assert');
const { add } = require('../src/calculator');

assert.strictEqual(add(1,2),3, '1 + 2 should be 3');
assert.strictEqual(add(5,-2),3, '5 + (-2) should be 3');
assert.strictEqual(add(0,0),0, '0 + 0 should be 0');

console.log('All tests passed!');
