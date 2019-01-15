import assert from 'assert'
import isPrime from '../src/isPrime'

describe('isPrime', () => {
  it('should handle "undefined" correctly', () => {
    assert.equal(isPrime(undefined), false)
  })

  it('should handle "NaN" correctly', () => {
    assert.equal(isPrime(NaN), false)
  })

  it('should handle "float number" correctly', () => {
    assert.equal(isPrime(0.1), false)
    assert.equal(isPrime(Math.PI), false)
  })

  it('should handle "integer number" correctly', () => {
    [2, 3, 5, 7, 11, 13, 17].map(v => assert.equal(isPrime(v), true))
    assert.equal(isPrime(0), false)
    Array.from([4, 6, 8, 12, 15, 178]).map(v => assert.equal(isPrime(v), false))
    assert.equal(isPrime(1), false)
    assert.equal(isPrime(-2), false)
  })
})
