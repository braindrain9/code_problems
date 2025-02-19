/**
 * Link: https://leetcode.com/problems/jump-game
 *
 * Description:
 * You are given an integer array nums. You are initially positioned at the array's first index,
 * and each element in the array represents your maximum jump length at that position.
 *
 * Return true if you can reach the last index, or false otherwise.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 * Example 2:
 *
 * Input: nums = [3,2,1,0,4]
 * Output: false
 * Explanation: You will always arrive at index 3 no matter what.
 * Its maximum jump length is 0, which makes it impossible to reach the last index.
 */

const canJump = function(nums) {
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > index) {
            return false;
        }

        if (index >= nums.length - 1) {
            return true;
        };

        index = Math.max(index, i + nums[i]);
    }
};

canJump([2,3,1,1,4]); // Output: true
canJump([3,2,1,0,4]); // Output: false
canJump([3,0,8,2,0,0,1]); // Output: true

