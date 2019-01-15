import assert from 'assert'
import primeFactors from '../src/primeFactors'

describe('primeFactors', () => {
  it('should handle "undefined" correctly', () => {
    assert.equal(primeFactors(undefined).length, 0)
  })

  it('should handle "NaN" correctly', () => {
    assert.equal(primeFactors(NaN).length, 0)
  })

  it('should handle "float number" correctly', () => {
    assert.equal(primeFactors(0.1).length, 0)
    assert.equal(primeFactors(Math.PI).length, 0)
  })

  it('should handle "0" correctly', () => {
    assert.deepEqual(primeFactors(0), [])
  })

  it('should handle "1" correctly', () => {
    assert.deepEqual(primeFactors(1), [])
  })

  it('should handle "integer number" correctly', () => {
    assert.deepEqual(primeFactors(255), [3, 5, 17])
  })
})
