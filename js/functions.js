/* eslint-disable prefer-const */
/* eslint-disable no-console */
const stringCheck = (string, stringLength) => string.length <= stringLength;

console.log(stringCheck('проверяемая строка', 20));
console.log(stringCheck('проверяемая строка', 18));
console.log(stringCheck('проверяемая строка', 10));
