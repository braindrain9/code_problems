/**
 * Link: https://www.hackerrank.com/challenges/three-month-preparation-kit-angry-children
 */

function maxMin(k: number, arr: number[]): number {
    const sortedArr = arr.sort((a,b) => a - b);

    let min = Infinity;

    for (let i = 0; i + k <= sortedArr.length; i++) {
        const diff = sortedArr[i + k - 1] - sortedArr[i];

        if (diff < min) {
            min = diff;
        }

        if (min === 0) {
            return min;
        }
    }

    return min;
}

maxMin(3, [
   10,  100, 300,
  200, 1000,  20,
   30
]); // 20
maxMin(4, [
   1,  2,  3,   4,  10,
  20, 30, 40, 100, 200
]); // 3
maxMin(2, [ 1, 2, 1, 2, 1 ]); // 0


