/**
 * Link: https://leetcode.com/problems/missing-number
 *
 * Description:
 * Given an array nums containing n distinct numbers in the range [0, n],
 * return the only number in the range that is missing from the array.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [3,0,1]
 * Output: 2
 * Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
 * 2 is the missing number in the range since it does not appear in nums.
 *
 * Example 2:
 *
 * Input: nums = [0,1]
 * Output: 2
 * Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2].
 * 2 is the missing number in the range since it does not appear in nums.
 *
 * Example 3:
 *
 * Input: nums = [9,6,4,2,3,5,7,0,1]
 * Output: 8
 * Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9].
 * 8 is the missing number in the range since it does not appear in nums.
 */

const missingNumber = function(nums) {
    let sortedNums = new Array(nums.length + 1).fill(-1);

    for(let i = 0; i < nums.length; i++) {
        sortedNums[nums[i]] = nums[i];
    }

    for(let i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i] === -1) {
            return i;
        }
    }
};

missingNumber([3, 0, 1]); // 2
missingNumber([0, 1]); // 2
missingNumber([9,6,4,2,3,5,7,0,1]); // 8
