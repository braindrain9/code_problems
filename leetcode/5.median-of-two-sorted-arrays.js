/**
 * Link: https://leetcode.com/problems/median-of-two-sorted-arrays
 *
 * Description:
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 *
 * The overall run time complexity should be O(log (m+n)).
 *
 *
 *
 * Example 1:
 *
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 * Example 2:
 *
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 */

const findMedianSortedArrays = function(nums1, nums2) {
    // Solution 1. ~Runtime: 92ms; Memory: 47 MB
    let combined = [...nums1, ...nums2].sort((a, b) => a-b); // JS sort: n log (n)
    let total = combined.length;

    if (total % 2 === 1) {
        return combined[(total - 1) / 2];
    } else {
        return (combined[total / 2 - 1] + combined[total / 2]) / 2;
    }
};

findMedianSortedArrays([1, 3], [2]); // 2
findMedianSortedArrays([1, 2], [3, 4]); // 2.5
findMedianSortedArrays([3], [-2, -1]); // -1
