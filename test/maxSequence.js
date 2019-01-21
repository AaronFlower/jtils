const assert = require('assert')
const T = require('../src')

describe('leetcode 001 two value sum', function() {
  it('empty array', function() {
    assert.deepEqual(T.maxSequence(), 0)
    assert.deepEqual(T.maxSequence([]), 0)
  })

  it('array', function() {
    assert.deepEqual(T.maxSequence([1]), 1)
    assert.deepEqual(T.maxSequence([-2, 3, -1, 5, 1]), 8)
    assert.deepEqual(T.maxSequence([-2, 3, -1, 5, -1]), 7)
  })
})
