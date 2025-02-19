/**
 * Link: https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/problem
 *
 * Description:
 * Given an array of integers, where all elements but one occur twice, find the unique element.
 *
 * Returns
 * int: the element that occurs only once
 */
function lonelyinteger(a: number[]): number {
    // @ts-ignore
    const obj = new Set();

    for(let num of a) {
        const element = num.toString();

        if (obj.has(element)) {
            obj.delete(element);
        } else {
            obj.add(element);
        }
    }

    const result = [...obj]

    return +result[0];
}

lonelyinteger([1]); // 1
lonelyinteger([1,1,2]); // 2
lonelyinteger([0,0,1,2,1]); // 2
