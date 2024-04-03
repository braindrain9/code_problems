/**
 * Link: https://leetcode.com/problems/climbing-stairs
 *
 * Description:
 * You are climbing a staircase. It takes n steps to reach the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 *
 *
 * Example 1:
 *
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * Example 2:
 *
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 */

const climbStairs = function(n) {
    /**
     * At each step of the loop, the number of ways to reach the current step
     * is the sum of the ways to reach the two previous steps.
     * This is a key property of the Fibonacci sequence.
     * @see: https://en.wikipedia.org/wiki/Fibonacci_sequence
     */
    let f0 = 0;
    let f1 = 1;
    let ways = 0;

    for (let i = 1; i <= n; i++) {
        ways = f0 + f1;
        f0 = f1;
        f1 = ways;
    }

    return ways;
};

climbStairs(2); // 2
climbStairs(3); // 3
