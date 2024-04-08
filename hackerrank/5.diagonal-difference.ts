/**
 * Link: https://www.hackerrank.com/challenges/one-week-preparation-kit-diagonal-difference/problem
 *
 * Description:
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 *
 * Return
 * int: the absolute diagonal difference
 */
function diagonalDifference(arr: number[][]): number {
    let sum1 = 0;
    let sum2 = 0;

    for(let i = 0; i < arr.length; i++) {
        const len = arr.length - 1 - i;

        sum1 +=  arr[i][i];
        sum2 +=  arr[i][len];
    }

    return Math.abs(sum1 - sum2);
}

diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]); // 15
