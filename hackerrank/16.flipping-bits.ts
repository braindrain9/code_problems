/**
 * Link: https://www.hackerrank.com/challenges/three-month-preparation-kit-flipping-bits/problem
 */

function flippingBits(n: number): number {
    const MAX_32_INT = Math.pow(2, 32) - 1; // max 32 bit int is 2^32 - 1

    return MAX_32_INT - n;
}

flippingBits(2147483647); // 2147483648
flippingBits(1); // 4294967294
flippingBits(0); // 4294967295
