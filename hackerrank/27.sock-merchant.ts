/**
 * Link: https://www.hackerrank.com/challenges/three-month-preparation-kit-sock-merchant/problem
 */

function sockMerchant(n: number, ar: number[]): number {
    let count = 0;
    let obj : {[key: string]: number} = {};

    for (let sock of ar) {
        if (!obj[sock]) {
            obj[sock] = 1;
        } else {
            obj[sock] += 1;
        }

        count += obj[sock] % 2 === 0 ? 1 : 0;
    }

  return count;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]); // 3
sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]); // 4
