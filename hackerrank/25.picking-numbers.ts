/**
 * Link: https://www.hackerrank.com/challenges/picking-numbers/problem
 */

function pickingNumbers(a: number[]): number {
    const result = a.map(num => {
        return a.reduce((prev,current) => {
            return prev += (current === num || current - num === 1) ? 1 : 0;
        },0);
    });

    return Math.max(...result);
}

pickingNumbers([4, 6, 5, 3, 3, 1]); // 3
pickingNumbers([1, 2, 2, 3, 1, 2]); // 5
