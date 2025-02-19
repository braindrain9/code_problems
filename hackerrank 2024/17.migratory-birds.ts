/**
 * Link: https://www.hackerrank.com/challenges/three-month-preparation-kit-migratory-birds/problem
 *
 * Description:
 * Given an array of bird sightings where every element represents a bird type id, determine the id of
 * the most frequently sighted type. If more than 1 type has been spotted that maximum amount,
 * return the smallest of their ids.
 */

function migratoryBirds(arr: number[]): number {
    // create set of each element and its count
    const birdsSet : {[key : string] : number} = {};

    for(let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (!birdsSet[element]) {
            birdsSet[element] = 1;
        } else {
            birdsSet[element] += 1;
        }
    }

    // find max
    const max = Object.keys(birdsSet).reduce((a, b) => {
        return birdsSet[a] >= birdsSet[b] ? a : b
    }, 0);

    return +max;
}

migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]); // 3
migratoryBirds([1, 4, 4, 4, 5, 3]); // 4
