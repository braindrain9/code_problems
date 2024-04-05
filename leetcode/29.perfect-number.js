/**
 * Link: https://leetcode.com/problems/perfect-number/
 *
 * Description:
 * A perfect number is a positive integer that is equal to the sum of its positive divisors,
 * excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.
 *
 * Given an integer n, return true if n is a perfect number, otherwise return false.
 *
 *
 *
 * Example 1:
 * Input: num = 28
 * Output: true
 * Explanation: 28 = 1 + 2 + 4 + 7 + 14
 * 1, 2, 4, 7, and 14 are all divisors of 28.
 *
 * Example 2:
 * Input: num = 7
 * Output: false
 */

const checkPerfectNumber = function(num) {
  let sum = 0;

  for (let i = 1; i < num; i++) {
    // get every divisor of a num and find their sum
    if (num % i === 0) {
        sum += i;
    }
  }
  return sum === num;
};

checkPerfectNumber(28); // true
checkPerfectNumber(7); // false
