const assert = require('assert')
const T = require('../src')

describe('leetcode 001 two value sum', function() {
  it('miss value', function() {
    assert.deepEqual(T.twoSum([1, 2, 3, 5], 9), [])
  })

  it('hit value', function() {
    assert.deepEqual(T.twoSum([1, 2, 3, 5], 5), [2, 3])
    assert.deepEqual(T.twoSum([1, -2, 3, 5], 3), [-2, 5])
    assert.deepEqual(T.twoSum([0, -2, 3, 5], 5), [0.0, 5])
  })
})
