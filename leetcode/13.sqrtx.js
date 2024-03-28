/**
 * Link: https://leetcode.com/problems/sqrtx/
 *
 * Description:
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
 * The returned integer should be non-negative as well.
 *
 * You must not use any built-in exponent function or operator.
 *
 * Example 1:
 *
 * Input: x = 4
 * Output: 2
 * Explanation: The square root of 4 is 2, so we return 2.
 * Example 2:
 *
 * Input: x = 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 */

const mySqrt = function(x) {
  /**
   * Using Binary Search formula: mid = (low + hi) / 2;
   * Sqrt = mid * mid;
   * Subtract consecutive odd nums. Then count how many times we subtracted.
   *
   * Example 1:
   * 8 - 1 = 7
   * 7 - 3 = 4
   * 4 - 5 = -1 (not valid)
   * 2 subtraction(we only accept til 0)
   *
   * Example 2:
   * 4 - 1 = 3
   * 3 - 3 = 0
   * 2 subtraction
   * Complexity
   * O(sqrt(x))
   * O(1)
   */

  let sqrt = 0;

  for(let i = 1; x > 0; i += 2 ){
      x = x - i;

      if (x >= 0) {
          sqrt++;
      }
  }

  return sqrt;
};

mySqrt(4); // 2
mySqrt(8); // 2
