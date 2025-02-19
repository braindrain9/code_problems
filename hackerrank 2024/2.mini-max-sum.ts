/**
 * Link: https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem
 *
 * Description:
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly
 * four of the five integers.
 * Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 *
 * Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements
 */
function miniMaxSum(arr: number[]): void {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    console.log(`${sum - max} ${sum - min}`);
}

miniMaxSum([1, 2, 3, 4, 5]); // 10 14
