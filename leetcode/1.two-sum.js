/**
 * Link: https://leetcode.com/problems/two-sum/
 *
 * Description:
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * Example 2:
 *
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * Example 3:
 *
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 * Only one valid answer exists.
 *
 * Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
 */

const twoSum = function(nums, target) {
    let indexes;

    // Solution 1. Brute Force. O(n)2 complexity. ~ Runtime: 287 ms, Memory: 44.4 MB
    // nums.forEach((num, i) => { // O(n)
    //   nums.forEach((n, j) => { // O(n)
    //     if (i !== j && num + n === target) { // O(1)
    //       indexes = [j, i]; // O(1)
    //     }
    //   });
    // });
    // -------------------------------------------------------- //

    // Solution 2. Set. O(n)2 complexity. ~ Runtime: 158 ms, Memory: 45.1 MB
    // const numSet = new Set(nums); // O(n)

    // nums.forEach((num, i) => { // O(n)
    //   let difference = target - num;
    //   let diffIndex = nums.indexOf(difference); // O(n) :=/

    //   if (numSet.has(difference) && diffIndex !== i) { // O(1)
    //       indexes = [diffIndex, i]; // O(1)
    //   }
    // });
    // -------------------------------------------------------- //

    // Solution 3. Two-pass Hash Table with Map. O(n) complexity. ~ Runtime: 64 ms, Memory: 45.1 MB
    // const numMap = new Map();

    // nums.forEach((num, i) => { // O(n)
    //   numMap.set(num, i); // O(1) issue: duplicate values are overriden
    // });

    // nums.forEach((num, i) => { // O(n)
    //   let difference = target - num; // O(1)
    //   let diffIndex = numMap.get(difference); // O(1)

    //   if (numMap.has(difference) && diffIndex !== i) { // O(1)
    //       indexes = [diffIndex, i]; // O(1) :=)
    //   }
    // });
    // -------------------------------------------------------- //

    // Solution 4. One-pass Hash Table with Map. O(n) complexity. ~ Runtime: 53 ms, Memory: 45 MB
    const numMap = new Map();

    nums.forEach((num, i) => { // O(n)
      let difference = target - num; // O(1)

      if (numMap.has(difference)) { // O(1)
        indexes = [numMap.get(difference), i]; // O(1) :=)
      } else {
        numMap.set(num, i); // O(1)
      }
    });


    return indexes;
};

// Test Cases:
twoSum([2, 7, 11, 15], 9); // [0,1]
twoSum([3, 2, 4], 6); // [1,2]
twoSum([3, 3], 6); // [0,1]
