/* eslint-disable no-param-reassign */
const gcd = (input1, input2) => {
  while (input1 !== input2) {
    if (input1 > input2) {
      input1 -= input2;
    } else {
      input2 -= input1;
    }
  }
  return input2;
};
function leastCommonMultiple(...args) {
  const input1 = args[0];
  const input2 = args[1];
  return (input1 * input2) / gcd(input1, input2);
}

export { leastCommonMultiple };
