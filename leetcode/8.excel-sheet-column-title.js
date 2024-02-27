/**
 * Link: https://leetcode.com/problems/excel-sheet-column-title/
 *
 * Description:
 * Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
 *
 * For example:
 *
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27
 * AB -> 28
 * ...
 *
 * Example 1:
 *
 * Input: columnNumber = 1
 * Output: "A"
 * Example 2:
 *
 * Input: columnNumber = 28
 * Output: "AB"
 * Example 3:
 *
 * Input: columnNumber = 701
 * Output: "ZY"
 */

// Using ASCII table where A = "26" and Z = "90"
const convertToTitle = function(columnNumber) {
    let result = '';

    while(columnNumber > 0) {
        const code = (--columnNumber) % 26;

        result = String.fromCharCode(code + 65) + result;

        columnNumber = (columnNumber - code) / 26;
    }

    return result;
};

convertToTitle(1); // Output: "A"
convertToTitle(28); // Output: "AB"
convertToTitle(701); // Output: "ZY"
convertToTitle(26); // Output: "Z"
