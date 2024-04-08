/**
 * Link: https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem
 *
 * Description:
 * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
 * Print the decimal value of each fraction on a new line with  places after the decimal.
 *
 * This challenge introduces precision problems. The test cases are scaled to six decimal places,
 * though answers with absolute error of up to 10^(-4) are acceptable.
 *
 * Print the ratios of positive, negative and zero values in the array.
 * Each value should be printed on a separate line with  digits after the decimal.
 * The function should not return a value.
 */

function plusMinus(arr: number[]): void {
    const positive = [];
    const negative = [];
    const zeros = [];
    const numLength = arr.length;

    arr.forEach(num => {
        if (num > 0) {
            positive.push(num);
        }
        if (num === 0) {
            zeros.push(num);
        }
        if (num < 0) {
            negative.push(num);
        }
    });

    console.log((positive.length/numLength).toPrecision(6));
    console.log((negative.length/numLength).toPrecision(6));
    console.log((zeros.length/numLength).toPrecision(6));
}

plusMinus([-4,3,-9,0,4,1]);
// 0.500000
// 0.333333
// 0.166667

plusMinus([1,2,3,-1,-2,-3,0,0]);
// 0.375000
// 0.375000
// 0.250000
