import assert from 'assert'
import commonDivisor from '../src/greatestCommonDivisor'

describe('greatestCommonDivisor', () => {
  it('should handle "null, undefined" correctly', () => {
    assert.equal(commonDivisor(undefined, null), 0)
    assert.equal(commonDivisor(null, null), 0)
  })

  it('should handle "0" correctly', () => {
    assert.equal(commonDivisor(12, 0), 12)
    assert.equal(commonDivisor(0, 0), 0)
  })

  it('should handle positive correctly', () => {
    assert.equal(commonDivisor(12, 4), 4)
    assert.equal(commonDivisor(14, 21), 7)
    assert.equal(commonDivisor(69, 169), 1)
    assert.equal(commonDivisor(1024, 48), 16)
  })

  it('should handle negative correctly', () => {
    assert.equal(commonDivisor(-12, -4), -4)
    assert.equal(commonDivisor(-1024, -48), -16)
  })

  it('should handle negative correctly', () => {
    assert.equal(commonDivisor(-12, 4), 4)
    assert.equal(commonDivisor(1024, -48), 16)
  })
})
