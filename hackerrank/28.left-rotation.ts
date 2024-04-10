/**
 * Link: https://www.hackerrank.com/challenges/three-month-preparation-kit-array-left-rotation/problem
 */

function rotateLeft(d: number, arr: number[]): number[] {
    let result = [];

    for(let i = d; i < d + arr.length; i++) {
        if (i >= arr.length) {
            result.push(arr[i - arr.length]);
        } else {
         result.push(arr[i]);
        }
    }

    // Solution 2: slice by d index and merge
    //
    // let leftSide = arr.slice(d, arr.length);
    // let rightSide = arr.slice(0, d);
    //
    // return [...leftSide, ...rightSide];

    return result;
}

rotateLeft(5, [1, 2, 3, 4, 5]); // [5, 1, 2, 3, 4]
