/**
 * Link: https://leetcode.com/problems/valid-sudoku/description/
 *
 * Description:
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 *
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 * Note:
 *
 * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * Only the filled cells need to be validated according to the mentioned rules.
 */


const isValidSudoku = function(board) {
    const uniqueSet = new Set();

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const number = board[i][j];

            if (number === '.') {
                break;
            }

            const row = `RowNumber: ${i}, number: ${number}`;
            const column = `ColumnNumber: ${j}, number: ${number}`;
            const boxNumber = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            const box = `BoxNumber: ${boxNumber}, number: ${number}`;

            if (uniqueSet.has(row) || uniqueSet.has(column) || uniqueSet.has(box)) {
                return false;
            } else {
                uniqueSet.add(row).add(column).add(box);
            }
        }
    };

    return true;
};

const example1 = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];
isValidSudoku(example1); // Output: true

const example2 = [
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];
isValidSudoku(example2); // Output: false
