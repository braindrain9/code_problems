/**
 * Link: https://www.hackerrank.com/challenges/one-month-preparation-kit-sherlock-and-array/
 *
 * Description:
 * Watson gives Sherlock an array of integers. His challenge is to find an element of the array such
 * that the sum of all elements to the left is equal to the sum of all elements to the right.
 *
 * Example:
 * arr = [5, 6, 8, 11]
 * 8 is between 2 subarrays that sum to 11.
 *
 * arr = [1];
 * The answear is [1] since left and right sum to 0.
 */

function balancedSums(arr: number[]): string {
    // push 0 to [-1] and [arr.length + 1] positions, as when arr = [1] should be YES,
    // arr = [1] => [0, 1, 0]; arr = [2, 0, 0, 0] => [0, 2, 0, 0, 0, 0]
    arr.unshift(0);
    arr.push(0);

    const arrSum = arr.reduce((acc, val) => acc + val, 0);

    let leftSubArraySum = 0;
    let rightSubArraySum = arrSum;

    for(let i = 1; i < arr.length - 1; i++) {
        // it's not efficient to count sum on every turn, for especially large array
        // let leftSubArraySum = arr.slice(0, i).reduce((acc, val) => acc + val, 0);
        // let rightSubArraySum = arr.slice(i + 1, arr.length).reduce((acc, val) => acc + val, 0);

        // count sum manually on every turn:
        // starting with i=1, sum of left is 0 (a[0]), and sum of right part is arrSum - current element (arr[i])
        leftSubArraySum += arr[i - 1];
        rightSubArraySum -= arr[i];

        if (leftSubArraySum === rightSubArraySum) {
            return 'YES';
        }
    }

    return  'NO';
}

balancedSums([1, 2, 3]); // NO
balancedSums([1, 2, 3, 3]); // YES
balancedSums([1, 1, 4, 1, 1]); // YES
balancedSums([2, 0, 0, 0]); // YES
balancedSums([0, 2, 0, 0]); // YES
