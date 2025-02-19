/**
 * Link: https://leetcode.com/problems/add-digits
 *
 * Description:
 * Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
 *
 * Example 1:
 *
 * Input: num = 38
 * Output: 2
 * Explanation: The process is
 * 38 --> 3 + 8 --> 11
 * 11 --> 1 + 1 --> 2
 * Since 2 has only one digit, return it.
 * Example 2:
 *
 * Input: num = 0
 * Output: 0
 *
 */

const addDigits = function(num) {
  if (num >= 10) {
      const str = num.toString().split('');
      const temp = str.reduce((acc, val) => acc + +val, 0);

      return addDigits(temp);
  }

  return num;
};

addDigits(38); // 2
addDigits(0); // 0

