/**
 * Link: https://leetcode.com/problems/ugly-number
 *
 * Description:
 * An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
 *
 * Given an integer n, return true if n is an ugly number.
 *
 * Example 1:
 *
 * Input: n = 6
 * Output: true
 * Explanation: 6 = 2 × 3
 * Example 2:
 *
 * Input: n = 1
 * Output: true
 * Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
 * Example 3:
 *
 * Input: n = 14
 * Output: false
 * Explanation: 14 is not ugly since it includes the prime factor 7.
 */

const isUgly = function(n) {
    if (n < 1) {
        return false;
    }

    const factors = [2, 3, 5];
    let quotient = n;

    for(let i = 0; i < factors.length; i++) {
        quotient = checkForPrimeFactors(quotient, factors[i]);

        if (quotient === 1) {
            return true;
        }
    };

    return false;
};

function checkForPrimeFactors(quotient, divider) {
    let remainder = 0;

    do {
        remainder = quotient % divider;

        const isWhole = (quotient / divider) % 1 === 0;

        if (isWhole) {
            quotient = quotient / divider;
        }
    } while (remainder === 0);

    return quotient;
}

isUgly(6); // true
isUgly(1); // true
isUgly(14); // false
isUgly(64); // true
