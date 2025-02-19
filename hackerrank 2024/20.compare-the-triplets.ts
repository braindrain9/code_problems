/**
 * Link: https://www.hackerrank.com/challenges/compare-the-triplets/problem
 */

function compareTriplets(a: number[], b: number[]): number[] {
    let alice = 0;
    let bob = 0;

    for(let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alice++;
        } else if (a[i] < b[i]) {
            bob++;
        }
    }

    return [alice, bob];
}

compareTriplets([5, 6, 7], [3, 6, 10]); // [1, 1]
compareTriplets([17, 28, 30], [99, 16, 8]); // [2, 1]
