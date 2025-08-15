/**
 * Takes a bigint and converts it to string so it can be handled
 * @param {*} key 
 * @param {*} value type of data - should be bigint
 * @returns string
 */
export default function replacer (key, value) {
  if (typeof value === 'bigint') {
    return value.toString();
  }
  return value;
};