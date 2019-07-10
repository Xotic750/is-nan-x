import noop from 'lodash/noop';
import numberIsNaN from 'src/is-nan-x';

const itHasWindow = typeof window === 'undefined' ? xit : it;

describe('numberIsNaN', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof numberIsNaN).toBe('function');
  });

  it('primitives', function() {
    expect.assertions(9);
    expect(numberIsNaN()).toBe(false, 'undefined is not NaN');
    expect(numberIsNaN(null)).toBe(false, 'null is not NaN');
    expect(numberIsNaN(false)).toBe(false, 'false is not NaN');
    expect(numberIsNaN(true)).toBe(false, 'true is not NaN');
    expect(numberIsNaN(0)).toBe(false, 'positive zero is not NaN');
    expect(numberIsNaN(Infinity)).toBe(false, 'Infinity is not NaN');
    expect(numberIsNaN(-Infinity)).toBe(false, '-Infinity is not NaN');
    expect(numberIsNaN('foo')).toBe(false, 'string is not NaN');
    expect(numberIsNaN('NaN')).toBe(false, 'string NaN is not NaN');
  });

  it('objects', function() {
    expect.assertions(3);
    expect(numberIsNaN([])).toBe(false, 'array is not NaN');
    expect(numberIsNaN({})).toBe(false, 'object is not NaN');
    expect(numberIsNaN(noop)).toBe(false, 'function is not NaN');
  });

  it('valueOf', function() {
    expect.assertions(2);
    const obj = {
      valueOf() {
        return NaN;
      },
    };

    expect(numberIsNaN(Number(obj))).toBe(true, 'object with valueOf of NaN, converted to Number, is NaN');
    expect(numberIsNaN(obj)).toBe(false, 'object with valueOf of NaN is not NaN');
  });

  it('naN', function() {
    expect.assertions(1);
    expect(numberIsNaN(NaN)).toBe(true, 'NaN is NaN');
  });

  itHasWindow('Work with window', function() {
    expect.assertions(1);
    expect(numberIsNaN(window)).toBe(false, 'window is not NaN');
  });
});
