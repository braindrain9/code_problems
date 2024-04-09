/**
 * Link: https://www.hackerrank.com/challenges/one-week-preparation-kit-recursive-digit-sum/problem
 *
 * Description:
 * We define super digit of an integer X using the following rules:
 * Given an integer, we need to find the super digit of the integer.
 *
 * - If X has only 1 digit, then its super digit is Z.
 * - Otherwise, the super digit of X is equal to the super digit of the sum of the digits of X.
 *
 * For example:
 *    super_digit(9875)    9+8+7+5 = 29
 *    super_digit(29)    2 + 9 = 11
 *    super_digit(11)        1 + 1 = 2
 *    super_digit(2)        = 2
 *
 * The number p is created by concatenating the string n k  times so the initial p = 9875987598759875.
 *
 * superDigit(p) = superDigit(9875987598759875) // 9+8+7+5+9+8+7+5+9+8+7+5+9+8+7+5 = 116
 * superDigit(p) = superDigit(116) // 1+1+6 = 8
 * superDigit(p) = superDigit(8)
 *
 * Return:
 *
 * int: the super digit of n repeated k times.
 */

function superDigit(n: string, k: number): number {
    let nums = n.split('');
    let multiply = k > 0;

    while(nums.length > 1) {
        let sum = nums.reduce((acc, val) => acc + +val, 0);

        if (multiply) {
            sum *= k;
            multiply = false;
        }

        nums = sum.toString().split('');
    }

    return +nums[0];
}

superDigit('148', 3); // 3
superDigit('9875', 4); // 8
superDigit('123', 3); // 9
