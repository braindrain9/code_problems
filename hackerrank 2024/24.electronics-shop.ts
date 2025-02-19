/**
 * Link: https://www.hackerrank.com/challenges/electronics-shop/problem
 */

function getMoneySpent(keyboards, drives, b) {
    let max = 0;

    for(let i = 0; i < keyboards.length; i ++) {
        if (keyboards[i] >= b) { // for huge amount if data break if item is already overpriced
            continue;
        }

         for(let j = 0; j < drives.length; j++) {
             if (drives[j] >= b) { // for huge amount if data break if item is already overpriced
                continue;
            }
              const sum = keyboards[i] + drives[j];

             if (sum <= b && sum > max) {
                 max = sum; // find max
             }
        }
    }

    return max > 0 ? max : -1;
}

getMoneySpent( [3, 1 ], [ 5, 2, 8 ], 10); // 9
getMoneySpent( [ 4 ], [ 5 ], 5); // -1
