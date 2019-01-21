const assert = require('assert')
const T = require('../src')

describe('deep clone integers, strings and booleans', function() {
  it('clones integers', function() {
    assert.strictEqual(T.clone(4), 4)
    assert.strictEqual(T.clone(0), 0)
    assert.strictEqual(
      T.clone(Number.MAX_SAFE_INTEGER),
      Number.MAX_SAFE_INTEGER
    )
  })

  it('clones floats', function() {
    assert.strictEqual(T.clone(Math.PI), Math.PI)
    assert.strictEqual(T.clone(0.0), 0.0)
  })

  it('clones string', function() {
    assert.strictEqual(T.clone('jtils'), 'jtils')
    assert.strictEqual(T.clone(''), '')
  })

  it('clones booleans', function() {
    assert.strictEqual(T.clone(true), true)
    assert.strictEqual(T.clone(false), false)
  })
})
