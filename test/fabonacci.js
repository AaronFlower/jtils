import assert from 'assert'
import fab from '../src/fabonacci'

describe('fabonacci', () => {
  it('should handle "0" correctly', () => {
    assert.equal(fab(0), 1)
  })

  it('should handle "float number" correctly', () => {
    assert.deepEqual([1, 2, 3, 4, 5, 10, 12, 20].map(v => fab(v)), [
      1,
      1,
      2,
      3,
      5,
      55,
      144,
      6765
    ])
  })
})
