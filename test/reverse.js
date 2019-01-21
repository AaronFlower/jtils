import assert from 'assert'
import reverse from '../src/reverse'

describe('reverse', () => {
  it('should handle "undefined, NaN" correctly', () => {
    assert.equal(reverse(undefined), '')
    assert.equal(reverse(NaN), '')
  })

  it('should handle "empty string" correctly', () => {
    assert.equal(reverse(''), '')
  })

  it('should handle "integer number" correctly', () => {
    assert.equal(reverse('hello'), 'olleh')
    assert.strictEqual(reverse('2'), '2')
  })
})
