/**
 * Link: https://leetcode.com/problems/pascals-triangle/
 *
 * Description:
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 *
 * Example 1:
 *
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * Example 2:
 *
 * Input: numRows = 1
 * Output: [[1]]
 */

const generate = function(numRows) {
    if (numRows === 0) {
        return [];
    }
    if (numRows === 1) {
        return [[1]];
    }

    let prevRows = generate(numRows - 1);
    let newRow = new Array(numRows).fill(1);

    for (let i = 1; i < numRows - 1; i++) {
        newRow[i] = prevRows[numRows - 2][i - 1] + prevRows[numRows - 2][i];
    }

    prevRows.push(newRow);

    return prevRows;
};

generate(5); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
generate(1); // [[1]]

