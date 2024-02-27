/**
 * Link: https://leetcode.com/problems/excel-sheet-column-title/
 *
 * Description:
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
