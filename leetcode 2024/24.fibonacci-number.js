/**
 * Link: https://leetcode.com/problems/fibonacci-number
 *
 * Description:
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
 * such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
 *
 * F(0) = 0, F(1) = 1
 * F(n) = F(n - 1) + F(n - 2), for n > 1.
 * Given n, calculate F(n).
 *
 * Example 1:
 *
 * Input: n = 2
 * Output: 1
 * Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
 * Example 2:
 *
 * Input: n = 3
 * Output: 2
 * Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
 * Example 3:
 *
 * Input: n = 4
 * Output: 3
 * Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 *
 */
const fib = function (n) {
  /**
   * Solution 1: Using formula (Binet's Formula),
   * @see https://en.wikipedia.org/wiki/Fibonacci_sequence
   */

  // const sqrt5 = Math.sqrt(5);
  // const fibN = Math.pow((1 + sqrt5) / 2, n) - Math.pow((1 - sqrt5) / 2, n);
  //
  // return Math.round(fibN / sqrt5);

  /**
   * Solution 2: Recursion, Complexity O(n^2)
   * as, in Fibonacci sequence nth number is sum of previous two number i.e (n-1)+(n-2).
   * we are calling the function again and again by (n-1) and (n-2).
   * corner cases are n === 0 or n === 1;
   */

  // if (n <= 1) {
  //     return n;
  // }
  //
  // return fib(n-1) + fib(n-2);


  /**
   * Solution 3: using memoization with array, Time Complexity O(n)
   */

  if (n <= 1) {
      return n;
  }

  const f = new Array(n + 1); // store Fibonacci numbers in array

  // corner cases, 0 and 1
  f[0] = 0;
  f[1] = 1;

  // starting from 2, as f[0] and f[1] already defined
  for (let i = 2; i <= n; i++) {
      f[i] = f[i - 1] + f[i - 2]; // sum 2 previous numbers to current
  }

  return f[n];
}

fib(2); // 1
fib(3); // 2
fib(4); // 3

