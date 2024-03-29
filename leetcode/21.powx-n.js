/**
 * Link: https://leetcode.com/problems/powx-n
 *
 * Description:
 * Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
 *
 * Example 1:
 *
 * Input: x = 2.00000, n = 10
 * Output: 1024.00000
 * Example 2:
 *
 * Input: x = 2.10000, n = 3
 * Output: 9.26100
 * Example 3:
 *
 * Input: x = 2.00000, n = -2
 * Output: 0.25000
 * Explanation: 2-2 = 1/22 = 1/4 = 0.25
 *
 * Constraints:
 *
 * -100.0 < x < 100.0
 * -231 <= n <= 231-1
 */
const myPow = function(x, n) {
    if (n === 0 || x === 1) {
        return 1;
    }

    let result = 1;
    let count = Math.abs(n);

    // binary
    while (count > 0) {
        if (count % 2 === 1) {
            result *= x;
        }

        x *= x;
        count = Math.floor(count / 2);
    }

    return n > 0 ? result : 1/result;
};

myPow(2, 10); // 1024
myPow(2.1, 3); // 9.26100
myPow(2, -1); // 0.25
