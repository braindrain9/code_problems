/**
 * Link: https://www.hackerrank.com/challenges/three-month-preparation-kit-divisible-sum-pairs/problem
 *
 * Description:
 * Example:
 * ar = [1, 2, 3, 4, 5, 6];
 * k = 5
 *
 * Three pairs meet the criteria: [1, 4], [2, 3] and [4, 6]
 */

function divisibleSumPairs(n: number, k: number, ar: number[]): number {
    let pairsCount = 0;

    for(let i = 0; i < ar.length - 1; i++) {
        let num1 = ar[i];

        for(let j = i + 1; j < ar.length; j++) {
            let num2 = ar[j];

            if ((num1 + num2) % k === 0) {
                pairsCount++;
            }
        }
    }

    return pairsCount;
}

divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]); // 3
divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]); // 5
