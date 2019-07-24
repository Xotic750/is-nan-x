<a href="https://travis-ci.org/Xotic750/is-nan-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/is-nan-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/is-nan-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-nan-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/is-nan-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-nan-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/is-nan-x"
  title="npm version">
<img src="https://badge.fury.io/js/is-nan-x.svg"
  alt="npm version" height="18">
</a>
<a href="https://www.jsdelivr.com/package/npm/is-nan-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/is-nan-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>

<a name="module_is-nan-x"></a>

## is-nan-x

ES6-compliant shim for Number.isNaN - the global isNaN returns false positives.

<a name="exp_module_is-nan-x--module.exports"></a>

### `module.exports(value)` ⇒ <code>boolean</code> ⏏

This method determines whether the passed value is NaN and its type is
`Number`. It is a more robust version of the original, global isNaN().

**Kind**: Exported function  
**Returns**: <code>boolean</code> - `true` if the given value is NaN and its type is Number;
otherwise, `false`.

| Param | Type            | Description                     |
| ----- | --------------- | ------------------------------- |
| value | <code>\*</code> | The value to be tested for NaN. |

**Example**

```js
import numberIsNaN from 'is-nan-x';

console.log(numberIsNaN(NaN)); // true
console.log(numberIsNaN(Number.NaN)); // true
console.log(numberIsNaN(0 / 0)); // true

// e.g. these would have been true with global isNaN()
console.log(numberIsNaN('NaN')); // false
console.log(numberIsNaN(undefined)); // false
console.log(numberIsNaN({}); // false
console.log(numberIsNaN('blabla')); // false

// These all return false
console.log(numberIsNaN(true));
console.log(numberIsNaN(null));
console.log(numberIsNaN(37));
console.log(numberIsNaN('37'));
console.log(numberIsNaN('37.37'));
console.log(numberIsNaN(''));
console.log(numberIsNaN(' '));
```
