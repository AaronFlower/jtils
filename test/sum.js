const assert = require('assert')
const T = require('../src')

describe('sum', function() {
  it('returns the exact number of two positive integer', function() {
    assert.equal(T.sum(2, 2), 4)
  })
})
