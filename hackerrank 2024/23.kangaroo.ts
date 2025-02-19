/**
 * Link: https://www.hackerrank.com/challenges/kangaroo/problem
 */

function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
    if (v1 === v2) { // at the same speed kangaroo will never meet
        return 'NO';
    }

    // using formula: x1 + v1 * t = x2 + v2 * t; t = (x2 - x1) / (v1 - v2);
    const t = (x2 - x1) / (v1 - v2);

    // time should be positive and whole number
    return t > 0 && t % 1 === 0 ? 'YES' : 'NO';
}

kangaroo(0, 3, 4, 2); // YES
kangaroo(0, 2, 5, 3); // NO
