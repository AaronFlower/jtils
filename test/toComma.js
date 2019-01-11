import toComma from '../src/toComma'
import assert from 'assert'

describe('toComma', () => {
  it('should return the thousands comma separator string', function() {
    assert.strictEqual(toComma(123456), '123,456')
    assert.strictEqual(toComma('123456'), '123,456')
    assert.strictEqual(toComma('123456.1'), '123,456.1')
    assert.strictEqual(toComma('123456.10000'), '123,456.1')
  });
  it('rounds the money', function() {
    assert.strictEqual(toComma('123456.1077'), '123,456.108')
  });

})
