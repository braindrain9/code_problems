/**
 * Link: https://leetcode.com/problems/happy-number/description/
 *
 * Description:
 * Write an algorithm to determine if a number n is happy.
 *
 * A happy number is a number defined by the following process:
 *
 * Starting with any positive integer, replace the number by the sum of the squares of its digits.
 * Repeat the process until the number equals 1 (where it will stay), or it loops endlessly
 * in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy.
 * Return true if n is a happy number, and false if not.
 *
 * Example 1:
 *
 * Input: n = 19
 * Output: true
 * Explanation:
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 * Example 2:
 *
 * Input: n = 2
 * Output: false
 */

const isHappy = function(n) {
    let seen = new Set();

    return findHappy(n, seen);
};

function findHappy(n, seen) {
    if (n === 1) {
        return true;
    }

    const arr = `${n}`.split(''); // Ex. 82 => ['8', '2']
    const res = arr.reduce(
        (acc, value) => acc + Math.pow(+value, 2), // 8**8 + 2**2 = 68
        0
    );

    if (seen.has(res)) {
        return false;
    } else {
        seen.add(res);

        return findHappy(res, seen);
    }
}

isHappy(19); // true
isHappy(2); // false
