/**
 * Link: https://www.hackerrank.com/challenges/three-month-preparation-kit-drawing-book/problem
 */

function pageCount(n: number, p: number): number {
    const stepsFromStart = Math.floor(p / 2);
    const stepsFromEnd = Math.floor(n / 2) - stepsFromStart;

    return Math.min(stepsFromStart, stepsFromEnd);
}

pageCount(6, 2); // 1
pageCount(5, 4); // 0
