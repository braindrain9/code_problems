/**
 * Link: https://leetcode.com/problems/single-number/
 *
 * Description:
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 *
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 *
 * Example 1:
 *
 * Input: nums = [2,2,1]
 * Output: 1
 *
 * Example 2:
 *
 * Input: nums = [4,1,2,1,2]
 * Output: 4
 *
 * Example 3:
 *
 * Input: nums = [1]
 * Output: 1
 */


const singleNumber = function(nums) {
    const result = {};

    for(let num of nums) { // O(n)
        if (!result[num]) { // O(1)
            result[num] = num; // O(1)
        } else {
            delete result[num]; // O(1)
        }
    }

    return Object.keys(result)[0]; // O(n)

    /**
     * Solution 2: with XOR operation
     * XOR of any number with itself is 1, so the duplicate numbers will become 1, and we will get the unique number.
     */

    // let result = 0;

    // for (let num of nums) {
    //     result ^= num;
    // }

    // return result;
};

singleNumber([2,2,1]); // Output: 1
singleNumber([4,1,2,1,2]); // Output: 4
singleNumber([1]); // Output: 1
