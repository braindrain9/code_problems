/**
 * Link: https://leetcode.com/problems/permutations/
 *
 * Description:
 * Given an array nums of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * Example 2:
 *
 * Input: nums = [0,1]
 * Output: [[0,1],[1,0]]
 * Example 3:
 *
 * Input: nums = [1]
 * Output: [[1]]
 */

const permute = function(nums) {
    let result = [];

    function find(index = 0) {
        if (index === nums.length) {
            result.push([...nums]);
            return;
        }

        for (let i = index; i < nums.length; i++) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
            find(index + 1);
            [nums[index], nums[i]] = [nums[i], nums[index]];
        }
    }

    find();

    return result;
};

permute([1,2,3]); // Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1],[3,1,2]]
permute([0,1]); // Output: [[0,1],[1,0]]
permute([1]); // Output: [[1]]
