/**
 * Link: https://www.hackerrank.com/challenges/three-month-preparation-kit-new-year-chaos/problem
 */

function minimumBribes(q: number[]): void {
    const map = new Map();
    let result = 0;
    let swapped = true;

    for(let j = 0; swapped; j++) {
        swapped = false;
        for(let i = 0; i < q.length - 1 - j; i++) {
            if(q[i] > q[i+1]) {
                swapped = true;
                result += 1;
                map.set(q[i], (map.get(q[i]) ?? 0) + 1);

                if(map.get(q[i]) > 2) {
                    console.log('Too chaotic');
                    return;
                }
                [q[i], q[i+1]] = [q[i+1], q[i]];
            }
        }
    }

    console.log(result);
}

minimumBribes([ 2, 1, 5, 3, 4 ]); // 3
minimumBribes([ 2, 5, 1, 3, 4 ]); // Too chaotic
