/**
 * Link: https://leetcode.com/problems/3sum
 *
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation:
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 * The distinct triplets are [-1,0,1] and [-1,-1,2].
 * Notice that the order of the output and the order of the triplets does not matter.
 * Example 2:
 *
 * Input: nums = [0,1,1]
 * Output: []
 * Explanation: The only possible triplet does not sum up to 0.
 * Example 3:
 *
 * Input: nums = [0,0,0]
 * Output: [[0,0,0]]
 * Explanation: The only possible triplet sums up to 0.
 */


function threeSum(nums: number[]): number[][] { // O(n^2)
    const numsArr = nums.sort((a,b) => a - b); // O(n log(n))

    let i = 0;
    const result: number[][] = [];
    const uniqueCombinations = new Set<string>();

    while(i < numsArr.length - 2) { // O(n)
        let j = i + 1; // start the next loop from the next element

        while(j < numsArr.length - 1) { // loop right side of array, O(n)
            const rightArr = numsArr.slice(j + 1, numsArr.length); // get right part of array where the third number could be

            let sum = 0 - (numsArr[i] + numsArr[j]); // the third number is diff of expected sum (0) minus sum of prev 2 nums
            const index = rightArr.indexOf(sum); // index of the third number
            const resultArr = [numsArr[i], numsArr[j], sum];
            const combinationHash = resultArr.join('b'); // add some non-integer char to create unique hash
            const combinationExists = uniqueCombinations.has(combinationHash); // avoid duplicate triplets

            if (index !== -1 && !combinationExists) {
                result.push(resultArr);
                uniqueCombinations.add(combinationHash);
            }

            j++;
        }

        i++;
    }

    return result;
};

threeSum([-1,0,1,2,-1,-4]); // Output: [[-1,-1,2],[-1,0,1]]
threeSum([0,1,1]); // Output: []
threeSum([0,0,0]); // Output: [[0,0,0]]
threeSum([3,0,-2,-1,1,2]); // Output: [[-2,-1,3],[-2,0,2],[-1,0,1]]
threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]); // Output: [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
