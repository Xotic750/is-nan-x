/**
 * This method determines whether the passed value is NaN and its type is
 * `Number`. It is a more robust version of the original, global isNaN().
 *
 * @param {*} [value] - The value to be tested for NaN.
 * @returns {boolean} `true` if the given value is NaN and its type is Number;
 *  otherwise, `false`.
 */
var isNaN = function isNaN(value) {
  /* eslint-disable-next-line no-self-compare */
  return value !== value;
};

export default isNaN;

//# sourceMappingURL=is-nan-x.esm.js.map