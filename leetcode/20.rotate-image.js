/**
 * Link: https://leetcode.com/problems/rotate-image/
 *
 * Description:
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
 *
 * You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
 * DO NOT allocate another 2D matrix and do the rotation.
 *
 * Example 1:
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [[7,4,1],[8,5,2],[9,6,3]]
 *
 * Example 2:
 * Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
 * Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 */

const rotate = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[0].length; j++) {
            let temp = matrix[i][j];

            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    matrix.map(m => m = m.reverse());
};

rotate([[1,2,3],[4,5,6],[7,8,9]]); // [[7,4,1],[8,5,2],[9,6,3]]
rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]); // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
